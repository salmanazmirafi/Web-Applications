import User from "../models/User.js";
import CryptoJs from "crypto-js";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  try {
    const newUser = User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(201).json("Something Wrong");
  }
};
// LOGIN
export const login = async (req, res) => {
  try {
    // Find User And Compare
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong Credentials!");

    // Find User Password
    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    const Orginalpassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    // Compare Password
    Orginalpassword !== req.body.password &&
      res.status(400).json("Wrong Password!");

    // Jwt token verify
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_WEB_SECRET_KEY,
      { expiresIn: "2d" }
    );

    // Finlay Login
    const { password, ...others } = user._doc;
    res.status(200).json({...others, token});
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};
