import express from "express";
import { deleteUser, getAllUser, singleUser, stats, updateUser } from "../controllers/user.js";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";
const router = express.Router();

// Update
router.put("/:id", verifyTokenAndAuthorization, updateUser);
// Delete
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
// Get Single Admin
router.get("/find/:id", verifyTokenAndAdmin, singleUser);
// Get All Admin
router.get("/", verifyTokenAndAdmin, getAllUser);
// Get Stats
router.get("/stats", verifyTokenAndAdmin, stats);

export default router;
