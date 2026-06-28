import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

// 解決 ESM 模組中沒有 __dirname 的問題
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// -------------------------------------------------------------
// 1. 在這裡編寫你的後端 API 路由 (範例)
// -------------------------------------------------------------
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// -------------------------------------------------------------
// 2. 靜態檔案託管與前端路由兜底 (SPA 專用)
// -------------------------------------------------------------
// 判斷靜態檔案路徑：考慮本地開發與打包後的路徑差異
const staticPath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

// 處理前端路由（如 wouter / react-router），將所有非 API 的請求導向 index.html
app.get("*", (req, res, next) => {
  // 如果是 API 請求但沒匹配到，不應該回傳 index.html，直接丟給 404
  if (req.path.startsWith("/api/")) {
    return next();
  }
  res.sendFile(path.join(staticPath, "index.html"));
});

// -------------------------------------------------------------
// 3. 環境判斷：只有在「非 Vercel 環境」下才啟動監聽埠口
// -------------------------------------------------------------
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  const server = createServer(app);
  
  server.listen(port, () => {
    console.log(`【本地伺服器】執行於 http://localhost:${port}/`);
  });
}

// -------------------------------------------------------------
// 4. 關鍵：必須預設匯出 (export default) app 實例供 Vercel 接管
// -------------------------------------------------------------
export default app;
