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
// animation code ends here
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    "header h1, header p, header .btn, .feature, .testimonial, .side-bar a, .newsletter p, .newsletter input, .newsletter .btn, .login-container .container, .register .container, .sec-nav, .course-card, .services-container, .contact-container, .faq, .about, .team-member"
  );

  const revealOnScroll = () => {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
      else {
        el.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
document.querySelectorAll(".service-item, .contact-container, .faq, .about, .team-member")
  .forEach(el => el.classList.add("show"));
  // ==================================================
// Canvas 2
const canvases = document.querySelectorAll(".networkCanvas");
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

canvases.forEach((canvasNet) => {
  const ctxNet = canvasNet.getContext("2d");

  function resizeNet() {
    canvasNet.width = canvasNet.offsetWidth;
    canvasNet.height = canvasNet.offsetHeight;
  }
  resizeNet();
  window.addEventListener("resize", resizeNet);

  let nodes = [];
  let nodeCount = isMobile ? 20 : 40;
  let maxSize2 = isMobile ? 1.2 : 2.5;

  class Node {
    constructor() {
      this.x = Math.random() * canvasNet.width;
      this.y = Math.random() * canvasNet.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.r = 0.7 + Math.random() * maxSize2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvasNet.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvasNet.height) this.vy *= -1;
    }
    draw() {
      ctxNet.beginPath();
      ctxNet.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctxNet.fillStyle = "rgba(0, 204, 109, 0.9)"; // أخضر فاتح
      ctxNet.shadowBlur = 10;
      ctxNet.shadowColor = "rgba(0, 255, 150, 0.8)"; // Glow أخضر نيون
      ctxNet.fill();
      ctxNet.shadowBlur = 0;
    }
  }

  for (let i = 0; i < nodeCount; i++) nodes.push(new Node());

  function connectNodes() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let dx = nodes[i].x - nodes[j].x;
        let dy = nodes[i].y - nodes[j].y;
        let dist = Math.hypot(dx, dy);
        if (dist < 80) {
          ctxNet.beginPath();
          ctxNet.moveTo(nodes[i].x, nodes[i].y);
          ctxNet.lineTo(nodes[j].x, nodes[j].y);
          ctxNet.strokeStyle = `rgba(0, 255, 150, ${1 - dist / 80})`; // خطوط أخضر فاتح شفاف
          ctxNet.lineWidth = 0.6;
          ctxNet.stroke();
        }
      }
    }
  }

  function animateNet() {
    ctxNet.clearRect(0, 0, canvasNet.width, canvasNet.height);
    nodes.forEach((n) => {
      n.update();
      n.draw();
    });
    connectNodes();
    requestAnimationFrame(animateNet);
  }
  animateNet();
});

// search bar toggle
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const courseCards = document.querySelectorAll(".course-card");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();
  searchResults.innerHTML = ""; // مسح النتائج القديمة

  if (filter === "") {
    searchResults.style.display = "none";
    courseCards.forEach(card => card.style.display = "flex");
    return;
  }

  let found = false;
  courseCards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    if (title.includes(filter)) {
      const resultItem = document.createElement("div");
      resultItem.textContent = card.querySelector("h2").textContent;
      resultItem.addEventListener("click", () => {
        courseCards.forEach(c => c.style.display = "none");
        card.style.display = "flex";
        searchResults.style.display = "none";
        searchInput.value = resultItem.textContent;
      });
      searchResults.appendChild(resultItem);
      found = true;
    }
  });

  searchResults.style.display = found ? "block" : "none";
});
// end of search bar toggle
