import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App25 from "./App25.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App25 />
  </StrictMode>,
);
// 사용하지 않는 임포트 정리하는 방법 alt ctrl o
