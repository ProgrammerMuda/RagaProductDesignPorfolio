(function () {
  const list = window.PROJECTS;
  const slug = new URLSearchParams(location.search).get("p") || list[0].slug;
  const idx = Math.max(0, list.findIndex((p) => p.slug === slug));
  const p = list[idx];
  const next = list[(idx + 1) % list.length];
  document.title = `${p.name} — Raga Murtadha`;

  const img = (h) => `assets/screens/${h}.jpg`;
  const pad = (n) => String(n).padStart(2, "0");
  let no = 0;
  const chip = (icon, label) => `<span class="chip"><i class="ph-duotone ph-${icon}"></i>${pad(++no)} · ${label}</span>`;
  const head = (icon, label, title, sub) => `
    <div class="cs-head reveal">
      <div class="left">${chip(icon, label)}<h2 class="t-section grad-text">${title}</h2></div>
      ${sub ? `<p class="t-body-lg muted">${sub}</p>` : ""}
    </div>`;

  const out = [];

  // Hero
  out.push(`
    <section class="cs-hero">
      <a class="back-link" href="projects.html"><i class="ph-duotone ph-arrow-left"></i>Back to all projects</a>
      <div class="cs-hero-text reveal">
        <span class="chip"><i class="ph-duotone ph-${p.ks.flows[0][3] === "phone" ? "device-mobile" : "browsers"}"></i>${p.chip}</span>
        <h1 class="cs-title grad-text">${p.name}</h1>
        <p class="cs-sub">${p.sub}</p>
      </div>
      <div class="glass cs-meta reveal">${p.meta.map(([k, v]) => `<div><span class="overline">${k}</span><span>${v}</span></div>`).join("")}</div>
      <div class="cs-cover reveal"><img src="assets/covers/${p.slug}.jpg" alt="${p.name} cover" /></div>
    </section>`);

  // Overview / issue
  out.push(`
    <section class="cs-section cs-overview">
      <div class="left reveal">${chip(p.overviewLabel ? "target" : "target", p.overviewLabel || "Overview")}<h2 class="t-section grad-text">${p.overview[0]}</h2></div>
      <p class="t-body-lg muted reveal">${p.overview[1]}</p>
    </section>`);

  // PROAPPS research sections
  if (p.market) {
    const m = p.market;
    out.push(`<section class="cs-section">${head("chart-pie-slice", "Market &amp; users", "What the market asks for")}
      <div class="market reveal">
        <div class="glass mk-card"><span class="overline">Market research</span>${m.points.map((t) => `<p class="dot-point">${t}</p>`).join("")}</div>
        <div class="glass mk-card mk-stats">${m.stats.map(([n, t]) => `<div><span class="mk-num grad-text">${n}</span><p class="muted">${t}</p></div>`).join("")}</div>
        <div class="glass mk-card"><span class="overline">Target research</span>
          <div class="mk-users">${m.users.map((u) => `<span><span class="ptile-sm"><i class="ph-duotone ph-user"></i></span>${u}</span>`).join("")}</div>
          <div class="mk-age"><span class="overline">Age range</span><strong>${m.age}</strong></div></div>
      </div></section>`);
    const r = p.research;
    out.push(`<section class="cs-section">${head("magnifying-glass", "Research", "Comparing, then listening", r.sub)}
      <div class="research reveal">
        <span class="overline">Competitor analysis</span><span class="overline">User interview</span>
        ${r.competitors.map(([n, s, w], i) => {
          const [q, qn, qr] = r.interviews[i] || [];
          return `<div class="glass comp"><div class="comp-head"><span>${pad(i + 1)}</span><h4>${n}</h4></div>
            <div class="sw-row"><i class="ph-duotone ph-plus-circle"></i><div><span class="lbl">Strength</span><p>${s}</p></div></div>
            <div class="sw-row"><i class="ph-duotone ph-minus-circle"></i><div><span class="lbl">Weakness</span><p>${w}</p></div></div></div>` +
            (q ? `<div class="glass quote"><i class="ph-duotone ph-quotes"></i><p>${q}</p><span class="who"><strong>${qn}</strong> <span class="muted">· ${qr}</span></span></div>` : "<div></div>");
        }).join("")}
      </div></section>`);
    const pr = p.problems;
    out.push(`<section class="cs-section">${head("puzzle-piece", "Problem &amp; solution", "Pain points, turned into features", pr.sub)}
      <div class="ps-grid reveal">
        ${pr.items.map(([t, d], i) => `<div class="glass ps problem"><div class="ps-head"><i class="ph-duotone ph-warning-circle"></i>Problem<span>${pad(i + 1)}</span></div><h4>${t}</h4><p class="muted">${d}</p></div>`).join("")}
        ${pr.items.map(([, , sol], i) => `<div class="glass ps solution"><div class="ps-head"><i class="ph-duotone ph-check-circle"></i>Solution<span>${pad(i + 1)}</span></div>${sol.map((s) => `<p class="dot-point">${s}</p>`).join("")}</div>`).join("")}
      </div></section>`);
    const tl = p.timeline;
    out.push(`<section class="cs-section">${head("flow-arrow", "Design process", "From briefing to hi-fi", tl.sub)}
      <div class="phases reveal">${tl.phases.map((ph, i) => `<div class="glass phase"><span class="muted">${pad(i + 1)}</span><h4>${ph}</h4></div>`).join("")}</div>
      <div class="glass gantt reveal">${tl.steps.map(([n, d, x, w]) => `
        <div class="g-row"><span class="g-name">${n}</span><div class="g-track"><span class="g-bar" style="left:${x}%;width:${w}%"></span></div><span class="g-dur muted">${d}</span></div>`).join("")}</div>
    </section>`);
  }

  // Information architecture
  if (p.ia) {
    out.push(`<section class="cs-section">${head("path", "Information architecture", p.ia.title, p.ia.sub)}
      <div class="ia-grid">${p.ia.areas.map(([icon, t, items]) => `
        <div class="glass ia-card reveal"><i class="ph-duotone ph-${icon}"></i><h4>${t}</h4><ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("")}</div>
    </section>`);
  }

  // Design process (GeoProperty)
  if (p.process) {
    const pr = p.process;
    out.push(`<section class="cs-section">${head("flow-arrow", "Process", pr.title, pr.sub)}
      <div class="ia-grid">${pr.steps.map(([t, d], i) => `<div class="glass ia-card step reveal"><span class="muted">${pad(i + 1)}</span><h4>${t}</h4><p class="muted">${d}</p></div>`).join("")}</div>
      <div class="glass lohi reveal">${pr.images.map(([t, h]) => `<div><span class="overline">${t}</span><img src="${img(h)}" alt="${t}" loading="lazy" /></div>`).join("")}</div>
    </section>`);
  }

  // Visual identity
  const vi = p.vi;
  out.push(`<section class="cs-section">${head("palette", p.market ? "Visual identity" : "Design system", p.market ? "Style guide &amp; logotype" : "Type &amp; colour")}
    <div class="vi-row reveal">
      <div class="glass vi-type"><span class="overline">Typeface</span><span class="aa">Aa</span><span class="font">${vi.font}</span></div>
      <div class="glass vi-colors"><span class="overline">Color</span>
        <div class="swatches">${vi.colors.map(([n, h]) => `<div class="sw-item"><span class="sw" style="background:${h}"></span><span>${n}</span><span class="muted hex">${h}</span></div>`).join("")}</div></div>
    </div>
    ${vi.logo ? `<div class="glass vi-logo reveal"><div class="vi-logo-text"><div><span class="overline">Logotype</span><h4>${vi.logo[0]}</h4></div><p class="muted">${vi.logo[1]}</p></div><img src="${img(vi.logo[2])}" alt="Logotype" loading="lazy" /></div>` : ""}
  </section>`);

  // Key screens
  const ks = p.ks, total = ks.flows.length;
  const shot = ks.shot || [637, 453];
  out.push(`<section class="cs-section">${head("device-mobile", "Key screens", ks.title, ks.sub)}
    <div class="flows">${ks.flows.map(([role, title, desc, kind, screens], i) => {
      const body = kind === "phone"
        ? screens.map(([l, h]) => `<figure class="phone"><img src="${img(h)}" alt="${l}" loading="lazy" /><figcaption>${l}</figcaption></figure>`).join("")
        : screens.map(([l, h, url, y, ih, h2]) => {
            const u = url || ks.url || p.name;
            const inner = kind === "web3"
              ? `<div class="shot long" style="aspect-ratio:${shot[0] === 637 ? "416/680" : "416/436"}"><div class="stack" style="top:${(y / (shot[0] === 637 ? 680 : 436)) * 100}%"><img src="${img(h)}" alt="${l}" loading="lazy" />${h2 ? `<img src="${img(h2)}" alt="" loading="lazy" />` : ""}</div></div>`
              : `<div class="shot" style="aspect-ratio:${shot[0]}/${shot[1]}"><img src="${img(h)}" alt="${l}" loading="lazy" /></div>`;
            return `<figure class="browser-wrap"><div class="browser"><div class="bar"><i></i><i></i><i></i><span class="url">${u}</span></div>${inner}</div><figcaption>${l}</figcaption></figure>`;
          }).join("");
      return `<article class="glass flow reveal">
        <div class="flow-head">
          <div class="flow-title"><div class="flow-meta"><span>${pad(i + 1)} / ${pad(total)}</span><span class="role"><i></i>${role}</span></div><h3>${title}</h3></div>
          <p class="t-body-lg muted">${desc}</p>
        </div>
        <div class="flow-screens k-${kind}">${body}</div>
      </article>`;
    }).join("")}</div>
  </section>`);

  // Closing
  const beh = p.behance || ["More work", "See more projects on Behance", "Visit my Behance"];
  out.push(`<section class="cs-section cs-closing">
    <div class="glass more-card reveal"><div><span class="overline">${beh[0]}</span><h3 class="grad-text">${beh[1]}</h3></div>
      <a class="btn-pill-arrow" href="${window.LINKS.behance}" target="_blank" rel="noopener">${beh[2]}<span class="arrow"><i class="ph-duotone ph-arrow-right"></i></span></a></div>
    <a class="glass next-card reveal" href="project.html?p=${next.slug}">
      <div class="next-img"><img src="assets/covers/${next.slug}.jpg" alt="" /></div>
      <div class="next-body"><div><span class="overline">Next project</span><h4>${next.name} — ${next.subtitle}</h4></div><span class="circle-btn"><i class="ph-duotone ph-arrow-up-right"></i></span></div>
    </a>
  </section>`);

  document.getElementById("case").innerHTML = out.join("");

  // Phone screens in one flow share one frame height: an image whose ratio differs
  // from the most common one in its flow is cropped (cover) to that ratio.
  document.querySelectorAll(".k-phone").forEach((flow) => {
    const imgs = [...flow.querySelectorAll("img")];
    Promise.all(imgs.map((im) => (im.complete ? 0 : new Promise((r) => { im.onload = im.onerror = r; })))).then(() => {
      const ratios = imgs.map((im) => (im.naturalWidth ? (im.naturalHeight / im.naturalWidth).toFixed(2) : null));
      const count = {};
      ratios.forEach((r) => r && (count[r] = (count[r] || 0) + 1));
      const mode = Object.keys(count).sort((a, b) => count[b] - count[a])[0];
      imgs.forEach((im, i) => {
        if (ratios[i] && ratios[i] !== mode) {
          const [w, h] = [imgs[ratios.indexOf(mode)].naturalWidth, imgs[ratios.indexOf(mode)].naturalHeight];
          im.style.aspectRatio = `${w} / ${h}`;
          im.style.objectFit = "cover";
          im.style.boxSizing = "content-box"; // ratio applies to the image, not its 6px border
          im.style.width = "calc(100% - 12px)";
        }
      });
    });
  });
  window.initReveal && window.initReveal();
})();
