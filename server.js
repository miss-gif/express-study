import express from "express";
import { usersRouter } from "./routes/users.router.js";
import { postsRouter } from "./routes/posts.router.js";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import { productsRouter } from "./routes/products.router.js";

const PORT = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 'public' 폴더에 정적 파일 저장
app.use(express.static(path.join(__dirname, "public")));

// JSON 파서 미들웨어
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://svx327:2xLDCxyHOU8QqUgt@cluster0.vpqui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// 요청 로깅 미들웨어
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.baseUrl} ${req.url} ${diffTime}ms`);
});

// 라우터 연결
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/products", productsRouter);

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
