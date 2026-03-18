// Hide navbar on scroll down, show on scroll up
let lastScrollY = window.pageYOffset;
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScrollY) {
    nav.style.top = "-80px"; // hide
  } else {
    nav.style.top = "0"; // show
  }
  lastScrollY = currentScroll;
});

// Reveal fade-in for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".section, .project-card").forEach(el => {
  observer.observe(el);
});