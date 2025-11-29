const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = "abcdefghijklmnopqrstuvwxyz0123456789";
letters = letters.split("");

let fontSize = 16;
let columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00cc6d";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / fontSize;
});
document.getElementById("sessions").addEventListener("change", function () {
  const iframe = document.getElementById("session-video");
  const videoContainer = document.querySelector(".video-container");

  switch (this.value) {
    case "session1":
      iframe.src = "https://www.youtube.com/embed/1Iz7F5yBjyU";
      videoContainer.style.display = "block";
      break;
    case "session2":
      iframe.src = "https://www.youtube.com/embed/qz0aGYrrlhU";
      videoContainer.style.display = "block";
      break;
    case "session3":
      iframe.src = "https://www.youtube.com/embed/UB1O30fR-EE";
      videoContainer.style.display = "block";
      break;
    case "session4":
      iframe.src = "https://www.youtube.com/embed/0afZj1G0BIE";
      videoContainer.style.display = "block";
      break;
    case "session5":
      iframe.src = "https://www.youtube.com/embed/pQN-pnXPaVg";
      videoContainer.style.display = "block";
      break;
    case "session6":
      iframe.src = "https://www.youtube.com/embed/3JluqTojuME";
      videoContainer.style.display = "block";
      break;
    case "session7":
      iframe.src = "https://www.youtube.com/embed/UB1O30fR-EE";
      videoContainer.style.display = "block";
      break;
    case "session8":
      iframe.src = "https://www.youtube.com/embed/2HVMiPzG1Jc";
      videoContainer.style.display = "block";
      break;
    case "session9":
      iframe.src = "https://www.youtube.com/embed/3qBXWUpoPHo";
      videoContainer.style.display = "block";
      break;
    case "session10":
      iframe.src = "https://www.youtube.com/embed/0afZj1G0BIE";
      videoContainer.style.display = "block";
      break;
    default:
      iframe.src = "";
      videoContainer.style.display = "none"; 
  }
});

