document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    reset: false,
    distance: "40px",
    duration: 1000,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)"
  });

  // Hero
  sr.reveal(".area-1 .picture",     { origin: "left",   delay: 100 });
  sr.reveal(".area-1 .description", { origin: "right",  delay: 200 });

  // Skills — cada ícone individualmente
  sr.reveal(".tech-item", { origin: "bottom", interval: 120, delay: 100 });

  // Título dos projetos
  sr.reveal(".title-projects", { origin: "bottom", delay: 100 });

  // Cards individualmente com interval
  sr.reveal(".card", { origin: "bottom", interval: 100, delay: 100 });

  // Footer
  sr.reveal("footer", { origin: "bottom", delay: 100 });
});