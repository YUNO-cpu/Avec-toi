const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const question = document.getElementById("valentineQuestion");
const popup = document.getElementById("popupNo");

console.log("SCRIPT OK");
console.log(yesButton);
console.log(noButton);

const palettes = [
  {
    background: "#fefcef",
    text: "#66001f",
    buttonYes: "#eee0dc",
    buttonNo: "#efe6de"
  },
  {
    background: "#b27981",
    text: "#7c313d",
    buttonYes: "#e59ca6",
    buttonNo: "#7c313d"
  },
  {
    background: "#7a9ab7",
    text: "#102e4a",
    buttonYes: "#4f7a9d",
    buttonNo: "#b2c2d0"
  },
  {
    background: "#b0e0f3",
    text: "#000000",
    buttonYes: "#3b6b82",
    buttonNo: "#5a8ca0"
  }
];

let index = 0;

function changePalette() {
  const p = palettes[index];
  document.body.style.background = p.background;
  question.style.color = p.text;
  yesButton.style.background = p.buttonYes;
  noButton.style.background = p.buttonNo;

  index = (index + 1) % palettes.length;
}

setInterval(changePalette, 6000);
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

