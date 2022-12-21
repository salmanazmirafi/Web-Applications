import express from "express";
import { createCart, deleteCart, getAllCart, singleCart, updateCart } from "../controllers/cart.js";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";
const cartRouter = express.Router();

// Crate Admin
cartRouter.post("/", verifyToken, createCart);
// Update Admin
cartRouter.put("/:id", verifyTokenAndAuthorization, updateCart);
// Delete Admin
cartRouter.delete("/:id", verifyTokenAndAuthorization, deleteCart);
// Get Single
cartRouter.get("/find/:userId", verifyTokenAndAuthorization, singleCart);
// Get All
cartRouter.get("/", verifyTokenAndAdmin, getAllCart);

export default cartRouter;
