import path from "path";
import { fileURLToPath } from "url";

// 현재 파일의 URL을 파일 경로로 변환합니다.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getPosts = async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "assets", "react.svg"));
};
