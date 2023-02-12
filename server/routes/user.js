import express from "express";
import {
  followUser,
  unfollowUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user";
import { verifyToken } from "../middleware/auth";
const router = express.Router();
router.get("/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.get("/:userId/:id", verifyToken, followUser);
router.get("/:userId/:id", verifyToken, unfollowUser);
