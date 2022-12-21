import express from "express";
import { createOrder, deleteOrder, getAllOrder, income, singleOrder, updateOrder } from "../controllers/order.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";
const orderRouter = express.Router();

// Crate Admin
orderRouter.post("/", verifyToken, createOrder);
// Update Admin
orderRouter.put("/:id", verifyTokenAndAdmin, updateOrder);
// Delete Admin
orderRouter.delete("/:id", verifyTokenAndAdmin, deleteOrder);
// Get Single
orderRouter.get("/find/:userId", verifyTokenAndAdmin, singleOrder);
// Get All
orderRouter.get("/", verifyTokenAndAdmin, getAllOrder);
// Get Income Monthly
orderRouter.get("/income", verifyTokenAndAdmin, income);

export default orderRouter;
