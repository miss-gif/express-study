import { getPosts } from "../controllers/posts.controller.js";
import express from "express";

export const postsRouter = express.Router();

postsRouter.get("/", getPosts);
