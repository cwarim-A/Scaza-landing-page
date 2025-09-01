import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import Router from "./Router";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
