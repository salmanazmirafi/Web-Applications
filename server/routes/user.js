import express from "express";
import { updateUser } from "../controllers/user.js";
import { verifyTokenAndAuthorization } from "../middleware/verifyToken.js";
const router = express.Router();

// Update
router.put("/:id", verifyTokenAndAuthorization, updateUser);
// Delete
router.delete("/");
// Get All
router.get("/");

export default router;
