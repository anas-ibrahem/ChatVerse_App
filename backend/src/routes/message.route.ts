import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  sendMessage,
  getMessages,
  getFriendsSideBar,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/friends", protectRoute, getFriendsSideBar);
router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;
