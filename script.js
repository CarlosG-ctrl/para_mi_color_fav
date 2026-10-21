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
  const card = document.querySelector(".letter-card");
  const music = document.getElementById("background-music");

  // Animación de entrada de la carta
  if (
    card &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    card.animate(
      [
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 650,
        easing: "ease-out",
        fill: "both"
      }
    );
  }

  if (!music) return;

  // Volumen inicial: 35 %
  music.volume = 0.35;

  // Intentar reproducir al abrir la página
  const startMusic = async () => {
    try {
      await music.play();

      // Si ya comenzó, no necesitamos más eventos
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
      document.removeEventListener("keydown", startMusic);
    } catch (error) {
      // El navegador puede bloquear la reproducción automática.
      // Se volverá a intentar al interactuar con la página.
    }
  };

  startMusic();

  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic, {
    passive: true
  });
  document.addEventListener("keydown", startMusic);
});