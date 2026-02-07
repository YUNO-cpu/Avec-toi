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
    buttonYes: "#66001f",
    buttonNo: "#66001f"
  },
 {
  background: "#2b5288",
  text: "#fffcef",
  buttonYes: "#fffcef",
  buttonNo: "#fffcef"
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
  },
  {
    background: "#3a000c",
    text: "#f2e5c6",
    buttonYes: "#f2e5c6",
    buttonNo: "#f2e5c6"
  },
   {
    background: "#cfebff",
    text: "#78020e",
    buttonYes: "#78020e",
    buttonNo: "#78020e"
  }
];

let index = 0;

function changePalette() {
  const p = palettes[index];
  document.body.style.background = p.background;
  question.style.color = p.text;
 yesButton.style.color = p.buttonYes;
noButton.style.color = p.buttonNo;

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

