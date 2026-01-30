// TEMP DEBUG: show exactly who triggers scroll/focus
const _scrollTo = window.scrollTo.bind(window);
window.scrollTo = (...args: any[]) => {
  console.trace("🚨 window.scrollTo called", args);
  return _scrollTo(...args);
};

const _scrollIntoView = Element.prototype.scrollIntoView;
Element.prototype.scrollIntoView = function (...args: any[]) {
  console.trace("🚨 scrollIntoView called on:", this, args);
  // @ts-ignore
  return _scrollIntoView.apply(this, args);
};

const _focus = HTMLElement.prototype.focus;
HTMLElement.prototype.focus = function (...args: any[]) {
  console.trace("🚨 focus() called on:", this, args);
  // @ts-ignore
  return _focus.apply(this, args);
};

import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Optional but good: don't restore scroll
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Handle redirect (GH pages / 404 fallback)
const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");

  // IMPORTANT: remove any hash that could jump to an anchor
  const url = new URL(redirect, window.location.origin);
  url.hash = "";

  window.history.replaceState(null, "", url.pathname + url.search);

  // Scroll to top immediately
  window.scrollTo(0, 0);
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Scroll to top again after React paints (kills the “1 second later” jump)
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
});
