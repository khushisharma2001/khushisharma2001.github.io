/* ==========================================
   Smooth Portfolio Interactions
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Navbar Shadow
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
        } else {
            navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
        }

    });


    /* ==========================
       Active Navigation Link
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });


    /* ==========================
       Fade In Animation
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".about-card, .skill-box, .timeline-item, .project-card, .education-card, .research-card, .contact-item, .stat-card"
    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

});
