console.log("SCRIPT OK");
console.log(yesButton);
console.log(noButton);

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const question = document.getElementById("valentineQuestion");
const popup = document.getElementById("popupNo");

const palettes = [
  {
    background: "#79a3c3", // body background өнгө
    text: "#3a2119",       // асуултын текстийн өнгө
    buttonYes: "#d2e2ec",  // YES товчны өнгө
    buttonNo: "#ebcdb7"    // NO товчны өнгө
  },
  {
    background: "#b2c2d0",
    text: "#7a9ab7",
    buttonYes: "#4f7a9d",
    buttonNo: "#3b4c6b"
  },
  {
    background: "#13273f",
    text: "#bdd3e2",
    buttonYes: "#e9d4c3",
    buttonNo: "#4e0000"
  },
  {
    background: "#c6d1d9",
    text: "#f1f1f1",
    buttonYes: "#e7e0d8",
    buttonNo: "#f4ebe9"
  }
];

let index = 0;
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
