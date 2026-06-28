import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 1. 如果你在后端有 API 路由，写在这里，例如：
// app.get("/api/hello", (req, res) => res.json({ message: "Hello" }));

// 2. 本地开发 / 传统生产环境下的静态文件兜底
// 注意：在 Vercel 线上，这段代码不会被触发，因为 Vercel 自身的 rewrites 优先级更高
const staticPath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// 3. 核心修改：如果是 Vercel 环境，【禁止】调用 listen()，直接导出 app
// 如果是本地开发环境，才启动传统服务器
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  const server = createServer(app);
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

// 4. 必须默认导出 Express 实例，供 Vercel Serverless 运行时调用
export default app;
