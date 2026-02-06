const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const question = document.getElementById("valentineQuestion");
const popup = document.getElementById("popupNo");

/* palette */
const palettes = [
  ["#79a3c3", "#3a2119", "#d2e2ec", "#ebcdb7", "#957662"],
  ["#b2c2d0", "#7a9ab7", "#4f7a9d", "#3b4c6b", "#7c2a2e"],
  ["#13273f", "#bdd3e2", "#e9d4c3", "#4e0000", "#694634"],
  ["#c6d1d9", "#f1f1f1", "#e7e0d8", "#f4ebe9", "#67869a"]
];

let index = 0;

function changePalette() {
  const p = palettes[index];
  document.body.style.background = p[0];
  question.style.color = p[1];
  yesButton.style.background = p[3];
  noButton.style.background = p[4];
  index = (index + 1) % palettes.length;
}

setInterval(changePalette, 2000);
changePalette();

/* NO button escape */
["mouseover", "touchstart"].forEach(event => {
  noButton.addEventListener(event, () => {
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 100 - 50;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  });
});

/* NO click popup */
noButton.addEventListener("click", () => {
  popup.style.display = "block";
  popup.style.opacity = "1";

  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
});

/* YES confetti */
function yayConfetti() {
  yesButton.style.transform = "scale(1.2)";
  setTimeout(() => {
    yesButton.style.transform = "scale(1)";
  }, 300);

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    location.href = "thankyou.html";
  }, 1000);
}

window.yayConfetti = yayConfetti;
