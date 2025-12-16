 //second loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 1500); 
});
