/* Shared nav, footer, page transitions and scroll reveal */
(function () {
  const LINKS = {
    linkedin: "https://www.linkedin.com/in/ragamrtdha/",
    behance: "https://www.behance.net/ragamurtadha",
    whatsapp: "https://wa.me/6289637568674",
    email: "mailto:ragamuthahari@gmail.com"
  };
  window.LINKS = LINKS;
  const onHome = document.body.dataset.page === "home";
  const sec = (id) => (onHome ? "#" + id : "index.html#" + id);

  const nav = document.getElementById("nav");
  if (nav) {
    nav.className = "nav-wrap container";
    nav.innerHTML = `
      <nav class="nav">
        <div class="brand"><a class="logo" href="index.html"><i class="ph-duotone ph-asterisk"></i>raga.design</a></div>
        <div class="nav-links">
          <a href="${sec("about")}">About</a><a href="${sec("experience")}">Experience</a>
          <a href="${onHome ? "#work" : "projects.html"}" class="${document.body.dataset.page === "projects" ? "active" : ""}">Work</a>
          <a href="${sec("approach")}">Approach</a><a href="${sec("contact")}">Contact</a>
        </div>
        <div class="right">
          <a class="btn-ghost" href="#" data-cv><i class="ph-duotone ph-download-simple"></i>Download CV</a>
          <a class="btn-shine" href="${LINKS.linkedin}" target="_blank" rel="noopener">Connect on LinkedIn<i class="ph-duotone ph-linkedin-logo"></i></a>
          <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><i class="ph-duotone ph-list"></i></button>
        </div>
      </nav>
      <div class="mobile-menu" id="mobile-menu">
        <a href="${sec("about")}">About</a><a href="${sec("experience")}">Experience</a>
        <a href="${onHome ? "#work" : "projects.html"}">Work</a><a href="${sec("approach")}">Approach</a><a href="${sec("contact")}">Contact</a>
        <div class="mm-actions">
          <a class="btn-ghost" href="#" data-cv><i class="ph-duotone ph-download-simple"></i>Download CV</a>
          <a class="btn-shine" href="${LINKS.linkedin}" target="_blank" rel="noopener">Connect on LinkedIn<i class="ph-duotone ph-linkedin-logo"></i></a>
        </div>
      </div>`;

    // Menu for narrow screens
    const btn = nav.querySelector(".menu-btn");
    const setOpen = (open) => {
      nav.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      btn.innerHTML = `<i class="ph-duotone ph-${open ? "x" : "list"}"></i>`;
    };
    btn.addEventListener("click", () => setOpen(!nav.classList.contains("menu-open")));
    nav.querySelectorAll(".mobile-menu a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    window.addEventListener("resize", () => { if (innerWidth > 1024) setOpen(false); });
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.className = "footer container";
    footer.innerHTML = `
      <div class="footer-cols">
        <div class="footer-brand">
          <a class="logo" href="index.html"><i class="ph-duotone ph-asterisk"></i>raga.design</a>
          <p class="t-body-lg muted">Product designer crafting thoughtful digital experiences — from first research to shipped product.</p>
        </div>
        <div class="footer-col"><p class="overline">Navigate</p>
          <a href="${sec("about")}">About</a><a href="${sec("experience")}">Experience</a><a href="${onHome ? "#work" : "projects.html"}">Work</a><a href="${sec("approach")}">Approach</a><a href="${sec("contact")}">Contact</a>
        </div>
        <div class="footer-col"><p class="overline">Connect</p>
          <a href="${LINKS.linkedin}" target="_blank" rel="noopener"><i class="ph-duotone ph-linkedin-logo"></i>LinkedIn<i class="ph-duotone ph-arrow-up-right ext"></i></a>
          <a href="${LINKS.behance}" target="_blank" rel="noopener"><i class="ph-duotone ph-behance-logo"></i>Behance<i class="ph-duotone ph-arrow-up-right ext"></i></a>
          <a href="${LINKS.whatsapp}" target="_blank" rel="noopener"><i class="ph-duotone ph-whatsapp-logo"></i>WhatsApp<i class="ph-duotone ph-arrow-up-right ext"></i></a>
        </div>
        <div class="footer-col"><p class="overline">Get in touch</p>
          <a href="${LINKS.email}"><i class="ph-duotone ph-envelope-simple"></i>ragamuthahari@gmail.com</a>
          <span><i class="ph-duotone ph-map-pin"></i>Indonesia · GMT+7</span>
          <a href="#" data-cv><i class="ph-duotone ph-download-simple"></i>Download CV</a>
        </div>
      </div>
      <div class="wordmark" aria-hidden="true"><span>RAGA MURTADHA</span></div>`;
  }

  // No CV file yet: keep the button visible but tell the visitor.
  document.addEventListener("click", (e) => {
    const cv = e.target.closest("[data-cv]");
    if (!cv) return;
    e.preventDefault();
    toast("CV is coming soon — reach me on LinkedIn in the meantime.");
  });

  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // Fade out before navigating to another page of the site
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || /^https?:/.test(href)) return;
    const url = new URL(href, location.href);
    if (url.pathname === location.pathname && url.hash) return;
    e.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(() => (location.href = url.href), 240);
  });
  window.addEventListener("pageshow", () => document.body.classList.remove("leaving"));

  // Chips get a bright copy of their label that the light sweep reveals
  function initChips() {
    document.querySelectorAll(".chip:not([data-shine])").forEach((c) => {
      c.dataset.shine = "";
      const s = document.createElement("span");
      s.className = "chip-shine"; s.setAttribute("aria-hidden", "true"); s.innerHTML = c.innerHTML;
      c.appendChild(s);
    });
  }

  // Reveal on scroll
  window.initReveal = function () {
    initChips();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
  };
  document.addEventListener("DOMContentLoaded", () => window.initReveal());
})();
