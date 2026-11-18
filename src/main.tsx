import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import "./index.css";
import App from "./App.tsx";
import { inject } from "@vercel/analytics";

inject();

// Grafana Frontend Observability: reports JS errors and page speed from real visitors.
// Live domain only, so local dev and previews don't add noise.
if (location.hostname.endsWith("maplekeymusic.ca")) {
  initializeFaro({
    url: "https://faro-collector-prod-ca-east-0.grafana.net/collect/68fa20848ae20c421a7b272cf558ba50",
    app: { name: "maple-key", environment: "production" },
    instrumentations: [...getWebInstrumentations()],
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
