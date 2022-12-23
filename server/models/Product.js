import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number },
    isStock:{type: Boolean, default : true}
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
