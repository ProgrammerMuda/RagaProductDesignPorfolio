(function () {
  // Industries marquee (track is duplicated so the loop is seamless)
  const industries = [["flag","Government"],["buildings","Property Tech"],["bank","Banking"],["airplane-tilt","Travel"],["chart-line-up","AI Sport Analytics"],["globe-hemisphere-east","Geospatial / GIS"]];
  const pills = industries.map(([i, t]) => `<span class="pill-ind"><i class="ph-duotone ph-${i}"></i>${t}</span>`).join("");
  document.getElementById("industries").innerHTML = pills + pills;

  // Experience timeline. Track is 880px wide in Figma; positions converted to %.
  const W = 880, pct = (v) => (v / W) * 100 + "%";
  const jobs = [
    { role: "Product Designer", current: true, company: "PT Indoland Manajemen Properti Terpadu · Contract", desc: "ProApps — building management system for multi-role users.", bar: ["ProApps", "Present"], left: 534, width: 323, solid: true },
    { role: "UI/UX Designer", company: "Revolve AI · Remote · PK & UK", desc: "Data-viz dashboards for AI sport analytics.", bar: ["AI sport analytics"], left: 534, width: 164 },
    { role: "UI/UX Designer", current: true, company: "PT Nerdvana Solusi Teknologi · Freelance", desc: "GeoProperty — AI search & map-based property UX.", bar: ["GeoProperty", "Present"], left: 6, width: 851, solid: true },
    { role: "UI/UX Designer", company: "PT Digital Logistik Internasional · Freelance", desc: "DLI OTA — flights, hotels and trains booking.", bar: ["DLI OTA"], left: 358, width: 340 },
    { role: "Product Designer", company: "PT Bank Rakyat Indonesia (BRI) · Part-time", desc: "SPOTLIGHT — geospatial survey app, West Java.", bar: ["SPOTLIGHT"], left: 182, width: 164 },
    { role: "UI/UX Designer", company: "PT Cipta Teknologi Aplikasi · Freelance", desc: "KLIX survey app & Kominfo TV Digital dashboard.", bar: ["KLIX · Kominfo TV Digital"], left: 6, width: 340 }
  ];
  const grid = [0, 176, 352, 528, 704].map((x) => `<span class="grid" style="left:${pct(x)}"></span>`).join("") + `<span class="now"></span>`;
  const years = ["2022", "2023", "2024", "2025", "2026"].map((y, i) => `<span class="yr" style="left:calc(${pct(i * 176)} + 10px)">${y}</span>`).join("") + `<span class="yr now-l" style="left:${pct(819)}">Now</span>`;
  document.getElementById("exp").innerHTML =
    `<div class="exp-row exp-axis"><div class="exp-info"><span class="overline">Role &amp; company</span></div><div class="exp-track">${grid}${years}</div></div>` +
    jobs.map((j) => `
      <div class="exp-row${j.current ? " current" : ""}">
        <div class="exp-info">
          <div class="exp-role">${j.role}${j.current ? '<span class="chip-current">Current</span>' : ""}</div>
          <div class="exp-company">${j.company}</div>
          <div class="exp-desc">${j.desc}</div>
        </div>
        <div class="exp-track">${grid}
          <div class="bar${j.solid ? " solid" : ""}" style="left:${pct(j.left)};width:${pct(j.width)}">${j.bar.map((b) => `<span>${b}</span>`).join("")}</div>
        </div>
      </div>`).join("");

  // Selected work: 4 featured projects
  const featured = ["proapps", "spotlight", "geoproperty", "dli"];
  const P = Object.fromEntries(window.PROJECTS.map((p) => [p.slug, p]));
  document.getElementById("work-grid").innerHTML = featured.map((slug, i) => {
    const p = P[slug], c = p.card;
    const art = slug === "proapps"
      ? `<div class="art art-proapps"><img src="assets/covers/card-proapps.jpg" alt="" /></div>`
      : `<div class="art art-light"><img src="assets/covers/${slug}.jpg" alt="" /></div>`;
    return `
      <a class="work-card reveal" href="project.html?p=${slug}">
        ${art}<div class="scrim"></div>
        <div class="wc-top">
          <span class="pill-dark">0${i + 1} / 04 <span class="dot">·</span> ${p.year} <span class="dot">·</span> ${p.role}</span>
          <span class="circle-btn"><i class="ph-duotone ph-arrow-up-right"></i></span>
        </div>
        <div class="wc-body">
          <span class="pill-dark"><i class="ph-duotone ph-${c.icon}"></i>${c.chip}</span>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
        </div>
      </a>`;
  }).join("");

  window.initReveal && window.initReveal();
})();

// Count-up for stat numbers: starts at 0 and runs once when the number scrolls into view
(function () {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const fmt = (el, v) => (el.textContent = v.toFixed(+el.dataset.dec || 0));
  const run = (el) => {
    const to = parseFloat(el.dataset.count), dur = 1600, t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      fmt(el, to * ease(t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  els.forEach((el) => fmt(el, 0));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { io.unobserve(en.target); setTimeout(() => run(en.target), 200); } });
  }, { threshold: 0.5 });
  els.forEach((el) => io.observe(el));
})();
