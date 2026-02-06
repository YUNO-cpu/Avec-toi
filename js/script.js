const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const question = document.getElementById("valentineQuestion");

/* palette жагсаалт */
const palettes = [
  ["#79a3c3", "#3a2119", "#d2e2ec", "#ebcdb7", "#957662"],
  ["#b2c2d0", "#7a9ab7", "#4f7a9d", "#3b4c6b", "#7c2a2e"],
  ["#13273f", "#bdd3e2", "#e9d4c3", "#4e0000", "#694634"],
  ["#c6d1d9", "#f1f1f1", "#e7e0d8", "#f4ebe9", "#67869a"]
];

let index = 0;

/* palette солих функц */
function changePalette() {
  const p = palettes[index];

  document.body.style.background =
    linear-gradient(135deg, ${p[0]}, ${p[2]});

  question.style.color = p[1];
  yesButton.style.background = p[3];
  noButton.style.background = p[4];

  index = (index + 1) % palettes.length;
}

/* 2 секунд тутамд солигдоно */
setInterval(changePalette, 2000);
changePalette();

/* NO button зугтах */
["mouseover", "touchstart"].forEach(event => {
  noButton.addEventListener(event, () => {
    const x = Math.random() * window.innerWidth / 3 - 50;
    const y = Math.random() * window.innerHeight / 5 - 30;
    noButton.style.transform = translate(${x}px, ${y}px);
  });
});

/* YES animation */
noButton.addEventListener("click", () => {
  yesButton.style.transform = "scale(1.2)";
  setTimeout(() => {
    yesButton.style.transform = "scale(1)";
  }, 220);
});

/* confetti */
function yayConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    location.href = "thankyou.html";
  }, 1000);
}

/* global болгох (onclick ажиллуулах) */
window.yayConfetti = yayConfetti;
