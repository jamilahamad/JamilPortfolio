
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar-custom");
  const reveals = document.querySelectorAll(".reveal");
  const skillItems = document.querySelectorAll(".skill-item");
  const contactForm = document.getElementById("contactForm");
  const mainNav = document.querySelector("#mainNav");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Stagger skill item animation
  skillItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 50}ms`;
  });

  // Unified scroll logic
  const handleScroll = () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    const windowHeight = window.innerHeight;
    const revealPoint = 140;

    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();

  // Bootstrap ScrollSpy
  if (mainNav && window.bootstrap) {
    bootstrap.ScrollSpy.getInstance(document.body)?.dispose();

    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 90,
    });

    window.addEventListener("load", () => {
      bootstrap.ScrollSpy.getInstance(document.body)?.refresh();
    });
  }

  // Auto close mobile navbar after click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  // Demo contact form
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully!");
      contactForm.reset();
    });
  }
});