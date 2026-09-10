// main.js — sitewide interactive behavior. Waits for partials:loaded before touching header/footer DOM.

function applySiteConfig() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = `tel:${cfg.phone.replace(/\s+/g, "")}`;
  });
  document.querySelectorAll("[data-phone-text]").forEach((el) => {
    el.textContent = cfg.phone;
  });
  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    if (cfg.whatsapp) el.href = `https://wa.me/${cfg.whatsapp}`;
  });
  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.href = `mailto:${cfg.email}`;
  });
  document.querySelectorAll("[data-email-text]").forEach((el) => {
    el.textContent = cfg.email;
  });
  document.querySelectorAll("[data-address-text]").forEach((el) => {
    el.textContent = cfg.address;
  });
}

function markActiveNavLink() {
  const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".main-nav a.nav-link, .main-nav .dropdown-item").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    if (href === currentPage || (currentPage === "index.html" && href === "")) {
      link.classList.add("active");
    }
  });
}

function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function onPartialsReady() {
  applySiteConfig();
  markActiveNavLink();
  initBackToTop();
}

document.addEventListener("partials:loaded", onPartialsReady);
document.addEventListener("DOMContentLoaded", applySiteConfig);
