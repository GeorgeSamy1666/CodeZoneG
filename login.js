 //second loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 1500); 
});
//burger menu
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
//matrix
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
    " .login-container .container"
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
document.querySelectorAll("")
  .forEach(el => el.classList.add("show"));
//   login form
const loginForm = document.querySelector(".login-container form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid email address.");
    return;
  }

  alert("Login successful!");
  loginForm.reset();
});
// end of login form