// Nav: highlight the section currently in view.
const links = document.querySelectorAll("nav a");
const targets = [...links].map(a => document.querySelector(a.getAttribute("href")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });
targets.forEach(t => t && observer.observe(t));

// Soft glow that follows the cursor (skipped for touch and reduced motion).
const canGlow = matchMedia("(hover: hover)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches;
if (canGlow) {
  let frame;
  window.addEventListener("mousemove", e => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    });
  });
}