import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/globals.css";
import QueryProvider from "./components/provider/QueryProvider";
import ThemeProvider from "./components/provider/ThemeProvider";
import RouterProvider from "./components/provider/RouterProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>
);
