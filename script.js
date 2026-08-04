/* ==========================================
   ZAYN STORE
   script.js - Part 1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initRevealAnimation();
    initScrollTop();

});

/* ==========================================
   Loader
========================================== */

function initLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }, 1200);

}

/* ==========================================
   Navbar Scroll Effect
========================================== */

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}

/* ==========================================
   Mobile Menu
========================================== */

function initMobileMenu() {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show-menu");

    });

}

/* ==========================================
   Active Navigation
========================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

/* ==========================================
   Smooth Scroll
========================================== */

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}

/* ==========================================
   Reveal Animation
========================================== */

function initRevealAnimation() {

    const elements = document.querySelectorAll(

        ".card,.category-card,.product-card,.glass-card,.stat-box,.offer-content"

    );

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(item => observer.observe(item));

}

/* ==========================================
   Scroll To Top
========================================== */

function initScrollTop() {

    const button = document.getElementById("scrollTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   Mouse Glow Effect
========================================== */

document.addEventListener("mousemove", (e) => {

    document.querySelectorAll(".card,.category-card,.product-card").forEach(card => {

        const rect = card.getBoundingClientRect();

        card.style.setProperty("--x", `${e.clientX - rect.left}px`);

        card.style.setProperty("--y", `${e.clientY - rect.top}px`);

    });

});

console.lo
g("✅ Zayn Store Script Part 1 Loaded");

/* ==========================================
   ZAYN STORE
   script.js - Part 2
========================================== */

/* ==========================================
   Counter Animation
========================================== */

function initCounter() {

    const counters = document.querySelectorAll(".stat-box h2");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.4

    });

    counters.forEach(counter => observer.observe(counter));

}

function animateCounter(element) {

    const text = element.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    const suffix = text.replace(/[0-9]/g, "");

    let current = 0;

    const step = Math.max(1, Math.ceil(number / 80));

    const timer = setInterval(() => {

        current += step;

        if (current >= number) {

            current = number;

            clearInterval(timer);

        }

        element.innerText = current + suffix;

    }, 20);

}

/* ==========================================
   Ripple Button Effect
========================================== */

function initRippleEffect() {

    document.querySelectorAll(".primary-btn,.secondary-btn,.buy-btn,.login-btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const size = Math.max(this.clientWidth, this.clientHeight);

            ripple.style.width = ripple.style.height = size + "px";

            const rect = this.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

            ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 700);

        });

    });

}

/* ==========================================
   Toast Notification
========================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => toast.remove(), 400);

    }, 3000);

}

/* ==========================================
   Theme Toggle
========================================== */

function initTheme() {

    const button = document.querySelector(".theme-btn");

    if (!button) return;

    button.addEventListener("click", () => {

        showToast("Premium Dark Theme Active");

    });

}

/* ==========================================
   Search
========================================== */

function initSearch() {

    const input = document.querySelector(".search-box input");

    if (!input) return;

    input.addEventListener("keyup", () => {

        const value = input.value.toLowerCase();

        document.querySelectorAll(".product-card,.category-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value) ? "" : "none";

        });

    });

}

/* ==========================================
   Utilities
========================================== */

function $(selector) {

    return document.querySelector(selector);

}

function $$(selector) {

    return document.querySelectorAll(selector);

}

/* ==========================================
   Final Init
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initCounter();

    initRippleEffect();

    initTheme();

    initSearch();

});

console.log("✅ Zayn Store Loaded Successfully");
