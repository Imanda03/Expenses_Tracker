import express from "express";
import { addRegister, addLogin } from "../controllers/user-controllers.js";

const router = express.Router();

router.post("/register", addRegister);
router.post("/login",addLogin);

export default router;