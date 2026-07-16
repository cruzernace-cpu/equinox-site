/* ==========================================
   EQUINOX ADVISORY
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       MOBILE MENU
    =========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });

    }

    /* ===========================
       HEADER SCROLL EFFECT
    =========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.background = "#061528";
            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

        } else {

            header.style.background = "#081b33";
            header.style.boxShadow = "0 3px 10px rgba(0,0,0,.15)";

        }

    });

    /* ===========================
       CONTACT FORM
    =========================== */

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const phone = form.querySelector('input[type="tel"]').value.trim();
            const details = form.querySelector("textarea").value.trim();

            if (!name || !email || !phone || !details) {

                alert("Please fill in all the fields.");

                return;

            }

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }

            alert(
                "Thank you for contacting Equinox Advisory.\n\nOur team will contact you shortly."
            );

            form.reset();

        });

    }

    /* ===========================
       FADE IN ON SCROLL
    =========================== */

    const elements = document.querySelectorAll(
        ".service-card, .why-card, .industry, .process-card, .stat"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.2
    });

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .7s ease";

        observer.observe(el);

    });

    /* ===========================
       COUNTER ANIMATION
    =========================== */

    const stats = document.querySelectorAll(".stat h2");

    stats.forEach(stat => {

        const text = stat.innerText;

        const number = parseInt(text.replace(/\D/g, ""));

        if (isNaN(number)) return;

        let current = 0;

        const speed = number / 60;

        function updateCounter() {

            current += speed;

            if (current < number) {

                stat.innerText =
                    Math.floor(current) +
                    text.replace(/[0-9]/g, "");

                requestAnimationFrame(updateCounter);

            } else {

                stat.innerText = text;

            }

        }

        updateCounter();

    });

});