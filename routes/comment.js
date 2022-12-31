import express from "express";

const router = express.Router();

// GET COMMENT
router.get("/comment");
// CREATE COMMENT
router.get("/:id");
// DELETE COMMENT
router.get("/:videoId");

export default router;
