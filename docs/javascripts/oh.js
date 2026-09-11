/* Wiki Once Human PS5 — animations d'interface
   1. Barre de progression de lecture
   2. Apparition des blocs au défilement
   Les deux respectent prefers-reduced-motion. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. Barre de progression ---- */
  function progressBar() {
    var bar = document.querySelector(".oh-progress");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "oh-progress";
      document.body.appendChild(bar);
    }
    var ticking = false;
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      bar.style.width = pct + "%";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---- 2. Apparition au défilement ---- */
  function reveal() {
    var targets = document.querySelectorAll(
      ".md-content .oh-card, .md-content .oh-hero, " +
      ".md-content .md-typeset h2, .md-content .md-typeset__table, " +
      ".md-content .md-typeset .admonition"
    );
    if (!targets.length) return;

    if (reduced || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(targets, function (el) { el.classList.add("oh-in"); });
      return;
    }

    /* Décalage en cascade pour les cartes d'une même grille */
    document.querySelectorAll(".md-content .oh-grid").forEach(function (grid) {
      grid.querySelectorAll(".oh-card").forEach(function (card, i) {
        card.style.setProperty("--oh-i", i);
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("oh-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add("oh-reveal");
      io.observe(el);
    });
  }

  function init() { progressBar(); reveal(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
