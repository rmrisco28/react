import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import App57 from "./App57.jsx";

createRoot(document.getElementById("root")).render(
  /*강제적인 모드 엄격한 모드*/

  <StrictMode>
    <App57 />
  </StrictMode>,
);
// 사용하지 않는 임포트 정리하는 방법 alt ctrl o
