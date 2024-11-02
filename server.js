import express from "express";
import { usersRouter } from "./routes/users.router.js";
import { postsRouter } from "./routes/posts.router.js";

const PORT = process.env.PORT || 3000;
const app = express();

// JSON 파서 미들웨어
app.use(express.json());

// 요청 로깅 미들웨어
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${baseUrl} ${req.url} ${diffTime}ms`);
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
