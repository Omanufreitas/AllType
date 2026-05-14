(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("menu-principal");
  var yearEl = document.getElementById("ano-atual");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function refreshNavToggleAria() {
    if (!navToggle || !header) return;
    var t = window.alltypeT;
    if (!t) return;
    var isOpen = header.classList.contains("site-header--nav-open");
    navToggle.setAttribute("aria-label", isOpen ? t("nav_close") : t("nav_open"));
  }

  window.__alltypeRefreshNavAria = refreshNavToggleAria;

  function setHeaderFilled(filled) {
    if (!header) return;
    if (filled) {
      header.classList.add("site-header--filled");
    } else {
      header.classList.remove("site-header--filled");
    }
  }

  function updateHeaderOnScroll() {
    if (!header) return;
    var threshold = 48;
    setHeaderFilled(window.scrollY > threshold);
  }

  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();

  function closeNav() {
    if (!header || !navToggle) return;
    header.classList.remove("site-header--nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    refreshNavToggleAria();
    document.body.style.overflow = "";
  }

  function openNav() {
    if (!header || !navToggle) return;
    header.classList.add("site-header--nav-open");
    navToggle.setAttribute("aria-expanded", "true");
    refreshNavToggleAria();
    document.body.style.overflow = "hidden";
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      if (header.classList.contains("site-header--nav-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 960px)").matches) {
          closeNav();
        }
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 960) {
        closeNav();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var lb = document.getElementById("office-lightbox");
      if (lb && lb.open) {
        lb.close();
        return;
      }
      if (typeof window.__alltypeCloseLangMenu === "function") {
        window.__alltypeCloseLangMenu();
      }
      closeNav();
    }
  });

  var officeLb = document.getElementById("office-lightbox");
  var officeLbImg = document.getElementById("office-lightbox-img");
  var officeLbClose = document.getElementById("office-lightbox-close");

  if (officeLb && officeLbImg && officeLbClose && typeof officeLb.showModal === "function") {
    document.querySelectorAll(".office-bento__open").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var src = btn.getAttribute("data-full-src");
        var innerImg = btn.querySelector("img");
        var alt = innerImg ? innerImg.getAttribute("alt") || "" : "";
        if (src) {
          officeLbImg.src = src;
          officeLbImg.alt = alt;
          officeLb.showModal();
        }
      });
    });

    officeLbClose.addEventListener("click", function () {
      officeLb.close();
    });

    officeLb.addEventListener("click", function (e) {
      if (e.target === officeLb) officeLb.close();
    });

    officeLb.addEventListener("close", function () {
      officeLbImg.removeAttribute("src");
      officeLbImg.alt = "";
    });
  }

  var revealSelector =
    ".card--reveal, .work-tile--reveal, .insight-list__item--reveal, .office-bento__cell--reveal";
  var revealElements = document.querySelectorAll(revealSelector);

  if (revealElements.length && "IntersectionObserver" in window) {
    var reduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      revealElements.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );

      revealElements.forEach(function (el) {
        observer.observe(el);
      });
    }
  } else if (revealElements.length) {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
