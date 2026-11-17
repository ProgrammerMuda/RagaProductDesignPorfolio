(function () {
  const list = window.PROJECTS;
  const tagIcon = { "Mobile App": "device-mobile", "Website": "browser" };
  const filters = ["All", "Mobile App", "Website"];
  const count = (f) => (f === "All" ? list.length : list.filter((p) => p.tags.includes(f)).length);
  const fEl = document.getElementById("filters"), grid = document.getElementById("grid");
  let active = "All";

  function card(p) {
    const stats = p.stats ? `<span class="stats"><span><i class="ph-duotone ph-eye"></i>${p.stats[0]}</span><span><i class="ph-duotone ph-thumbs-up"></i>${p.stats[1]}</span></span>` : "";
    return `<a class="proj-card reveal" href="project.html?p=${p.slug}">
      <div class="cover"><img src="assets/covers/${p.slug}.jpg" alt="" loading="lazy" /></div>
      <div class="body">
        <div class="meta"><span class="tags-row">${p.tags.map((t) => `<span class="tag"><i class="ph-duotone ph-${tagIcon[t]}"></i>${t}</span>`).join("")}</span>${stats}</div>
        <div class="title-row"><h3>${p.name}<span>${p.subtitle}</span></h3><span class="arrow"><i class="ph-duotone ph-arrow-up-right"></i></span></div>
      </div></a>`;
  }
  const behance = `<a class="proj-card behance-card reveal" href="${window.LINKS.behance}" target="_blank" rel="noopener">
      <i class="ph-duotone ph-behance-logo be"></i>
      <h3 class="grad-text">See process, case studies and more on Behance.</h3>
      <span class="btn-shine glow">Visit my Behance<i class="ph-duotone ph-behance-logo"></i></span></a>`;

  function render() {
    fEl.innerHTML = filters.map((f) => `<button class="filter${f === active ? " on" : ""}" data-f="${f}">${f}<span class="n">${count(f)}</span></button>`).join("");
    const shown = active === "All" ? list : list.filter((p) => p.tags.includes(active));
    document.getElementById("count").textContent = shown.length;
    grid.innerHTML = shown.map(card).join("") + behance;
    window.initReveal();
  }
  fEl.addEventListener("click", (e) => { const b = e.target.closest("[data-f]"); if (!b) return; active = b.dataset.f; render(); });
  render();
})();
