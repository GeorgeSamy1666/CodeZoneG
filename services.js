 //second loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 1500); 
});
// matrix
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
// burger menu
const burger = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    navLinks.classList.add('show');
    burger.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('show');
    burger.style.display = 'block';
    closeIcon.style.display = 'none';
});
// end of burger menu
// get in touch
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");
const messageInput = document.getElementById("contact-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all required fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid email address.");
    return;
  }

  alert("Message sent successfully!");
  contactForm.reset();
});
// end of get in touch
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
      ctxNet.fillStyle = "rgba(0, 204, 109, 0.9)";
      ctxNet.shadowBlur = 10;
      ctxNet.shadowColor = "rgba(0, 255, 150, 0.8)"; 
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
          ctxNet.strokeStyle = `rgba(0, 255, 150, ${1 - dist / 80})`; 
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
