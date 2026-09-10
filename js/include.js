/**
 * include.js — loads shared partials into any page. Zero dependencies, zero build step.
 * Place the <script> tag for this file AFTER every [data-include] element in the page,
 * and BEFORE main.js.
 *
 * Requires the page to be served over http(s) — fetch() cannot read local files opened
 * with file://. For local preview, run a simple server, e.g.:
 *   python -m http.server 8080
 * or use your editor's "Live Server" extension.
 */
(function () {
  const slots = document.querySelectorAll("[data-include]");
  let pending = slots.length;

  function done() {
    document.dispatchEvent(new CustomEvent("partials:loaded"));
  }

  if (pending === 0) {
    done();
    return;
  }

  slots.forEach((slot) => {
    const url = slot.getAttribute("data-include");

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${url} -> HTTP ${response.status}`);
        return response.text();
      })
      .then((html) => {
        slot.innerHTML = html;
        slot.removeAttribute("data-include");
      })
      .catch((error) => {
        console.error("[include.js] Failed to load partial:", error);
        slot.innerHTML = `<!-- include failed: ${url} -->`;
      })
      .finally(() => {
        pending -= 1;
        if (pending === 0) done();
      });
  });
})();
