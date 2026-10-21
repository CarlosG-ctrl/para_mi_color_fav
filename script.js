// La carta es intencionalmente sencilla: el contenido se lee sin depender de JavaScript.
// Pequeño efecto de entrada que respeta la preferencia de movimiento del dispositivo.
(() => {
  const card = document.querySelector(".letter-card");
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  card.animate(
    [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 650, easing: "ease-out", fill: "both" }
  );
})();


/* MUSICA */
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("background-music");
  if (!music) return;

  music.volume = 0.35;

  // Intentar reproducir apenas se abra la página.
  const playMusic = () => {
    music.play().catch(() => {
      // Si el navegador bloquea el audio, esperar
      // la primera interacción del usuario.
    });
  };

  playMusic();

  ["click", "touchstart", "keydown"].forEach((event) => {
    document.addEventListener(event, playMusic, { once: true });
  });
});
