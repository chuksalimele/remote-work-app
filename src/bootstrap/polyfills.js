/**
 * Do feature detection, to figure out which polyfills needs to be imported.
 **/
async function loadPolyfills() {
  if (typeof window.IntersectionObserver === "undefined") {
    await import("intersection-observer");
  }
}

loadPolyfills();
