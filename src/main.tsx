// src/main.tsx

// --- Stop the “loads then scrolls down” issue ---
// Root cause: something calls focus() shortly after load, which scrolls the page.
// We temporarily block programmatic focus during initial load (or until user interacts).

(() => {
  const blockMs = 2500; // adjust if needed
  const start = performance.now();

  const originalFocus = HTMLElement.prototype.focus;

  HTMLElement.prototype.focus = function (...args: any[]) {
    const elapsed = performance.now() - start;
    const isInitialLoad = elapsed < blockMs;

    if (isInitialLoad) {
      // Ignore focus calls during the first ~2.5s (prevents scroll jump)
      return;
    }

    // @ts-ignore
    return originalFocus.apply(this, args);
  };

  // As soon as the user interacts, restore normal focus immediately
  const enable = () => {
    HTMLElement.prototype.focus = originalFocus;
    window.removeEventListener("pointerdown", enable, true);
    window.removeEventListener("keydown", enable, true);
    window.removeEventListener("touchstart", enable, true);
  };

  window.addEventListener("pointerdown", enable, true);
  window.addEventListener("keydown", enable, true);
  window.addEventListener("touchstart", enable, true);
})();

// Also prevent browser scroll restoration
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Handle redirect (GH pages / 404 fallback)
const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");

  // Remove any hash that could jump to an anchor
  const url = new URL(redirect, window.location.origin);
  url.hash = "";

  window.history.replaceState(null, "", url.pathname + url.search);

  // Go to top immediately
  window.scrollTo(0, 0);
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Ensure we're at the top after mount/paint
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
});
