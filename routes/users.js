import express from "express";
import {
  allUser,
  dislike,
  like,
  subscribe,
  unsubscribe,
  update,
  userDelete,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// UPDATE USER
router.put("/user/:id", verifyToken, update);
// DELETE USER
router.delete("/user/:id", verifyToken, userDelete);
// GET A USER
router.get("/user/:id", verifyToken, allUser);

// SUBSCRIBE A USER
router.put("/sub/:id", verifyToken, subscribe);
// UNSUBSCRIBE A USER
router.put("/usub/:id", verifyToken, unsubscribe);
// LIKE A VIDEO
router.put("/like/:videoId", verifyToken, like);
// DISLIKE A VIDEO
router.put("/like/:videoId", verifyToken, dislike);

export default router;
