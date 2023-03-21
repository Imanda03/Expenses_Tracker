import express from "express";
import AccountBook from "../schema/addAccountBook.js";

const router = express.Router();

router.post("/accountBooks", AccountBook);

export default router;