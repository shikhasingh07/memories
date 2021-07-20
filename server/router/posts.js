import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getPostBySearch,
  commentPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
//applying middle ware to know that person is allowed or not
const router = express.Router();
router.get("/", getPosts);
router.get("/search", getPostBySearch);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
