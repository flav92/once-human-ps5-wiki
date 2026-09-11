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

  /* ---- 2. Animations d'entrée ----
     Règle : le contenu est lisible dès le chargement. Rien n'est
     masqué en attendant un défilement — on n'anime que des éléments
     décoratifs (cartes) et un liseré sous les titres. */
  function reveal() {
    var cards = document.querySelectorAll(".md-content .oh-card");
    var heads = document.querySelectorAll(".md-content .md-typeset h2");

    function showAll() {
      Array.prototype.forEach.call(cards, function (el) { el.classList.add("oh-in"); });
      Array.prototype.forEach.call(heads, function (el) { el.classList.add("oh-in"); });
    }

    if (reduced || !("IntersectionObserver" in window)) { showAll(); return; }

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
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });

    Array.prototype.forEach.call(cards, function (el) {
      el.classList.add("oh-reveal");
      io.observe(el);
    });
    Array.prototype.forEach.call(heads, function (el) { io.observe(el); });

    /* Filet de sécurité : si quoi que ce soit empêche l'observateur
       de se déclencher, tout redevient visible au bout d'1,5 s. */
    window.setTimeout(showAll, 1500);
  }

  function init() { progressBar(); reveal(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
