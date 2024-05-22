import express from "express";
import * as posts from "./posts.controller.js";

const router = express.Router();

router.get("/", posts.getPosts);

router.post("/", posts.addPost);

router.put("/", posts.updatePost);

router.delete("/", posts.deletePost);

export default router;
