/**
 * SpacECE India Foundation – Neo Doodle Preschool Landing Page
 * JavaScript: Interactions, Animations, Nav
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initSplashScreen();
  initStickyHeader();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initCounterAnimation();
  initEnrollForm();
  initActiveNavHighlight();
  initTiltEffect();
  initBackToTop();
});

/* =========================
   SPLASH SCREEN
========================= */
function initSplashScreen() {
  const splash = $("#splash-screen");
  if (!splash) return;

  // Prevent scrolling while splash is active
  document.body.style.overflow = "hidden";

  // Hide splash after 2.5 seconds (gives time for logo pop and loader to finish)
  setTimeout(() => {
    splash.classList.add("hidden");
    document.body.style.overflow = ""; // Restore scrolling
  }, 2500);
}

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => scope.querySelectorAll(selector);

/* =========================
   STICKY HEADER
========================= */
function initStickyHeader() {
  const header = $("#header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* =========================
   MOBILE MENU TOGGLE
========================= */
function initMobileMenu() {
  const hamburger = $("#hamburger");
  const nav = $("#mainNav");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("open");
  });

  $$(".nav__link", nav).forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("open");
    });
  });
}

/* =========================
   SMOOTH SCROLL
========================= */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = $(href);
      if (!target) return;

      e.preventDefault();
      const headerHeight = 84;
      const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetY, behavior: "smooth" });
    });
  });
}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
function initScrollReveal() {
  const elements = $$(".reveal");
  if (!elements.length || !("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  elements.forEach(el => observer.observe(el));
}

/* =========================
   COUNTER / NUMBER ANIMATION
========================= */
function initCounterAnimation() {
  const counters = $$(".stat__num[data-target]");
  if (!counters.length || !("IntersectionObserver" in window)) return;

  const animateCounter = (element, target) => {
    let start = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      element.textContent = Math.round(target * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute("data-target"), 10);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* =========================
   ACTIVE NAV HIGHLIGHT
========================= */
function initActiveNavHighlight() {
  const sections = $$("section[id]");
  const navLinks = $$(".nav__link");

  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => observer.observe(section));
}

/* =========================
   ENROLL FORM MOCK SUBMIT
========================= */
function initEnrollForm() {
  const form = $("#enrollForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const originalText = btn.textContent;

    btn.textContent = "Sending Magic... ✨";
    btn.disabled = true;

    setTimeout(() => {
      alert("Application sent successfully! We will contact you soon.");
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
    }, 1500);
  });
}

/* =========================
   3D TILT EFFECT (DESKTOP)
========================= */
function initTiltEffect() {
  if ("ontouchstart" in window) return;

  const tiltElements = $$(".step-card, .gain-card, .g-item");

  tiltElements.forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const tiltX = (y * -10).toFixed(2);
      const tiltY = (x * 10).toFixed(2);

      el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

/* =========================
   BACK TO TOP BUTTON
========================= */
function initBackToTop() {
  const btn = $("#backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
