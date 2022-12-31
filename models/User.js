import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Name should have more than 8 characters"],
    },
    img: {
      type: String,
    },
    subscribe: {
      type: Number,
      default: 0,
    },
    subscribeUsers: {
      type: [String],
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
