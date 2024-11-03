import express from "express";
import { createProduct } from "../controllers/products.controller.js";

export const productsRouter = express.Router();

// 제품 생성 라우팅 처리
productsRouter.post("/", createProduct);
