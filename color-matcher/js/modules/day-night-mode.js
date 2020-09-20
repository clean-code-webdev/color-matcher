function dayNightMode() {
  let sun = document.querySelector("#sun");
  let moon = document.querySelector("#moon");

  let isNightMode = true;

  if (isNightMode) {
    sun.addEventListener("click", () => {
      let btnRandom = document.querySelector("#random-btn");

      btnRandom.style.border = "0.1rem solid #191919";
      sun.style.display = "none";
      moon.style.display = "block";

      document.body.style.background = "#f1f3f6";
      document.body.style.color = "#191919";
      isNightMode = false;
      return;
    });
  }

  moon.addEventListener("click", () => {
    let btnRandom = document.querySelector("#random-btn");

    btnRandom.style.border = "0.1rem solid #f1f3f6";
    moon.style.display = "none";
    sun.style.display = "block";

    document.body.style.background = "#191919";
    document.body.style.color = "#f1f3f6";
    isNightMode = true;
    // return;
  });
}

export { dayNightMode };
