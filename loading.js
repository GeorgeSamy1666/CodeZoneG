
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");

  const hasLoaded = localStorage.getItem("loaderShown");

  if (!hasLoaded) {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.style.overflow = "auto";

      localStorage.setItem("loaderShown", "true");
    }, 5000);
  } else {
    loader.classList.add("hidden");
  }
});


