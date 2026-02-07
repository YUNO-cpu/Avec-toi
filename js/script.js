const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const question = document.getElementById("valentineQuestion");
const popup = document.getElementById("popupNo");

console.log("SCRIPT OK");
console.log(yesButton);
console.log(noButton);

const palettes = [
  {
    background: "#67869a",
    text: "#f4ebe9",
    buttonYes: "#67869a",
    buttonNo: "#67869a"
  },
  {
    background: "#4e0000",
    text: "#e9d4c3",
    buttonYes: "#4c0013",
    buttonNo: "#41101b"
  },
  {
    background: "#fffdf4",
    text: "#41101b",
    buttonYes: "#41101b",
    buttonNo: "#41101b"
  },
  {
    background: "#bdd3e2",
    text: "#694634",
    buttonYes: "#bdd3e2",
    buttonNo: "#bdd3e2"
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

