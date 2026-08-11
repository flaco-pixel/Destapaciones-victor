(function () {
  "use strict";

  /* ---------- Año dinámico en el footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: estado "scrolled" ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menú hamburguesa (mobile) ---------- */
  var hamburger = document.getElementById("hamburger");
  var mobileNav = document.getElementById("mobileNav");

  function closeMobileNav() {
    hamburger.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
  }

  hamburger.addEventListener("click", function () {
    var isOpen = mobileNav.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMobileNav);
  });

  /* ---------- Dropdown WhatsApp del header ---------- */
  var waDropdown = document.querySelector("[data-wa-dropdown]");
  var waToggle = document.querySelector("[data-wa-toggle]");

  if (waDropdown && waToggle) {
    waToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = waDropdown.classList.toggle("is-open");
      waToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (e) {
      if (!waDropdown.contains(e.target)) {
        waDropdown.classList.remove("is-open");
        waToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        waDropdown.classList.remove("is-open");
        waToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Botón flotante de WhatsApp con menú ---------- */
  var waFloat = document.querySelector("[data-wa-float]");
  var waFloatToggle = document.querySelector("[data-wa-float-toggle]");

  if (waFloat && waFloatToggle) {
    waFloatToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = waFloat.classList.toggle("is-open");
      waFloatToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (e) {
      if (!waFloat.contains(e.target)) {
        waFloat.classList.remove("is-open");
        waFloatToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        waFloat.classList.remove("is-open");
        waFloatToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Reveal on scroll (fade + slide up) ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Fallback: mostrar todo directamente
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Cerrar menú mobile al agrandar ventana ---------- */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 980) closeMobileNav();
  });
})();
