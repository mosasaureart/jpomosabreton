// Récupération des éléments
const core = document.getElementById("core");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screenReturn = document.getElementById("screenReturn");
const iconReturn = document.getElementById("iconReturn");
const audio = document.getElementById("audio");

// -------- Écran 1 -> écran 2 au clic sur core --------
core.addEventListener("click", () => {
  screen1.classList.add("blur-out");

  setTimeout(() => {
    screen1.style.display = "none";
    screen2.style.display = "block";
    audio.play();
  }, 1500);
});

// -------- Flèches clavier pour navigation --------
document.addEventListener("keydown", (e) => {

  // Flèche haut → scènes suivantes
  if (e.key === "ArrowUp") {
    if (screen2.style.display === "block") {
      screen2.classList.add("blur-out");
      setTimeout(() => {
        screen2.style.display = "none";
        screen3.style.display = "block";
      }, 1500);
    } else if (screen3.style.display === "block") {
      screen3.classList.add("blur-out");
      setTimeout(() => {
        screen3.style.display = "none";
        screen4.style.display = "block";
      }, 1500);
    }
  }

  // Flèche bas → scène retour
  if (e.key === "ArrowDown") {
    if (screen2.style.display === "block" ||
        screen3.style.display === "block" ||
        screen4.style.display === "block") {
      screen2.style.display = "none";
      screen3.style.display = "none";
      screen4.style.display = "none";

      screenReturn.style.display = "block";
    }
  }
});

// -------- Clic sur iconReturn → revenir à écran 1 (reset) --------
iconReturn.addEventListener("click", () => {
  // Cacher toutes les scènes sauf écran 1
  screenReturn.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";

  // Afficher écran 1 et enlever blur
  screen1.style.display = "block";
  screen1.classList.remove("blur-out");

  // Arrêter l'audio si besoin et remettre au début
  audio.pause();
  audio.currentTime = 0;
});

const image11 = document.getElementById("image11"); // assure-toi que l'image a cet ID
const screenCharacter = document.getElementById("screenCharacter");

// Quand on clique sur image11
image11.addEventListener("click", () => {
  // Cacher toutes les autres scènes
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screenReturn.style.display = "none";

  // Afficher la scène personnage
  screenCharacter.style.display = "block";
});