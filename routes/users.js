import express from "express";

const router = express.Router();

// UPDATE USER
router.get("/signup");
// DELETE USER
router.get("/signin");
// GET A USER
router.get("/google");

// SUBSCRIBE A USER
router.get("/signup");
// UNSUBSCRIBE A USER
router.get("/signin");
// LIKE A VIDEO
router.get("/google");
// DISLIKE A VIDEO
router.get("/google");

export default router;
