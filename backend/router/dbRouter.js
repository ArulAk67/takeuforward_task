import express from "express";
import { getCode, getEntry, postCode } from "../controller/dbController.js";

const router =express.Router();

router.post("/post",postCode);
router.get("/get/:token",getCode);
router.get("/entries",getEntry);

export default router;