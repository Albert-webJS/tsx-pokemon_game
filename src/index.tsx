import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";
import App from "./App";

import "./index.css";

WebFont.load({
  google: {
    families: ["Overlock: 400, 400i, 700"],
  },
});

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
