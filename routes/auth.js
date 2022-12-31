import express from "express";
import { logOut, signin, signup } from "../controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/signup", signup);
// SIGN IN
router.post("/signin", signin);
// Log Out
router.get("/logout", logOut);
// GOOGLE AUTH
router.get("/google");

export default router;
