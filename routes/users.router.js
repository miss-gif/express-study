import {
  getUser,
  getUsers,
  postUser,
} from "../controllers/users.controller.js";
import express from "express";

export const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUser);
usersRouter.post("/", postUser);
