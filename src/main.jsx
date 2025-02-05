import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

ReactDom.createRoot(document.getElementById("root")).render(
  <div>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </div>
);
