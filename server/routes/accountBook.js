import express from "express";
import AccountBook from "../schema/addAccountBook";

const router = express.Router();

router.post("/accountBooks", AccountBook);

export default router;