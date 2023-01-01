import express from "express";
import { googleAuth, logOut, signin, signup } from "../controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/signup", signup);
// SIGN IN
router.post("/signin", signin);
// Log Out
router.get("/logout", logOut);
// GOOGLE AUTH
router.post("/google", googleAuth);

export default router;
