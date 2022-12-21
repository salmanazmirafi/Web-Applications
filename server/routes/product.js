import express from 'express'
import { createProduct, deleteProduct, getAllProduct, singleProduct, updateProduct } from '../controllers/product.js';
import { verifyTokenAndAdmin } from '../middleware/verifyToken.js';
const productRouter = express.Router()

// Crate
productRouter.post("/", verifyTokenAndAdmin, createProduct);
// Update
productRouter.put("/:id", verifyTokenAndAdmin, updateProduct);
// Delete
productRouter.delete("/:id", verifyTokenAndAdmin, deleteProduct);
// Get Single Admin
productRouter.get("/find/:id", singleProduct);
// Get All Admin
productRouter.get("/", getAllProduct);


export default productRouter