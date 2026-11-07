// Highlight the nav link for the section currently in view.
const links = document.querySelectorAll("nav a");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach(s => s && observer.observe(s));
