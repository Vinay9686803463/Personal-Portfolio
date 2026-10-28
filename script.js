
"use strict";

/* ==========================================
   DOM ELEMENTS
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll(".nav-link");
const currentYear = document.getElementById("currentYear");

/* ==========================================
   MOBILE NAVIGATION
========================================== */

function closeMenu() {
    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.classList.remove("open");
    navigation.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
}

function toggleMenu() {
    if (!menuToggle || !navigation) {
        return;
    }

    const isOpen = navigation.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
}

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", toggleMenu);
}

/* ==========================================
   NAVIGATION LINKS
========================================== */

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

/* ==========================================
   ACTIVE SECTION HIGHLIGHT
========================================== */

const sections = document.querySelectorAll("main section[id]");

if (typeof globalThis !== "undefined" && "IntersectionObserver" in globalThis) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const sectionId = entry.target.id;

                navLinks.forEach((link) => {
                    const isActive =
                        link.getAttribute("href") === `#${sectionId}`;

                    link.classList.toggle("active", isActive);
                });
            });
        },
        {
            rootMargin: "-25% 0px -60% 0px",
            threshold: 0
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
}

/* ==========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener("click", (event) => {
    if (!menuToggle || !navigation) {
        return;
    }

    const clickedInsideMenu = navigation.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
    }
});

/* ==========================================
   CLOSE MENU WITH ESCAPE KEY
========================================== */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

/* ==========================================
   RESET MENU ON DESKTOP
========================================== */

globalThis.addEventListener("resize", () => {
    if (globalThis.innerWidth > 768) {
        closeMenu();
    }
});

/* ==========================================
   AUTOMATIC COPYRIGHT YEAR
========================================== */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
