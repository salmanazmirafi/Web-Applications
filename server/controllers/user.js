import User from "../models/User.js";
import CryptoJs from "crypto-js";

// Update user
export const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};
// Delete user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("User Has Been Deleted");
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};

// Single User
export const singleUser = async (req, res) => {
  try {
    const deleteUser = await User.findById(req.params.id);
    const { password, ...others } = deleteUser._doc;
    res.status(201).json(others);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};
// Get All User
export const getAllUser = async (req, res) => {
  const query = req.query.new;
  try {
    const getAllUser = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(getAllUser);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};
// Get User Stats
export const stats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json("Something Wrong");
  }
};
