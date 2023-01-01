import { createError } from "../error.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Update User
export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          password: hash,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

// Delete User
