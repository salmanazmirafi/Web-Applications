import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createError } from "../error.js";

// Sign Up
export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).json("User has been created");
  } catch (err) {
    next(err);
  }
};

// Sign In
export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(400, "User Not Found"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

// Log out
// Sign In
export const logOut = async (req, res, next) => {
  try {
    res.cookie("access_token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json("Log Out");
  } catch (err) {
    next(err);
  }
};

// Google Auth
export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const saveUser = await newUser.save();
      const token = jwt.sign({ id: saveUser._id }, process.env.JWT_SECRET);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(saveUser);
    }
  } catch (err) {
    next(err);
  }
};
