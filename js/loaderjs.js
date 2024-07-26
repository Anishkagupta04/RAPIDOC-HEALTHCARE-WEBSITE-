window.addEventListener("load", () => {
    const loader = document.querySelector(".pre");

    loader.classList.add("pre--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });