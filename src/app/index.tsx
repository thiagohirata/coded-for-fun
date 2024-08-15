import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Page from "./page";

if (!window.IS_SERVE && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js", {
    scope: "./",
  });
}

const Root: React.FC = () => {
  return <Page />;
};

createRoot(document.getElementById("root")).render(<Root />);

if (window.IS_SERVE) {
  const eventSource = new EventSource("/esbuild");
  const reload = () => {
    location.reload();
    eventSource.removeEventListener("change", reload);
  };
  eventSource.addEventListener("change", reload);
}
