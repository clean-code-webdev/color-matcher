function changeColors() {
  // get every previously generated color
  let colors = document.querySelectorAll(".prev-color");

  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", () => {
      // get clicked previously generated color
      let color = colors[i].style.background;
      // get previously generated color parent node
      let parent = colors[i].parentNode;

      // check if clicked color belongs to text previously generated color
      if (parent.classList.contains("prev-font-color")) {
        // change font color
        changeFontColor(color);

        return;
      }

      // change bg color
      changeBgColor(color);
    });
  }
}

// change font color
function changeFontColor(color) {
  let text = document.querySelectorAll(".text");

  // change every text color
  for (let i = 0; i < text.length; i++) {
    text[i].style.color = color;
  }
}

// change bg color
function changeBgColor(color) {
  // get content
  let bg = document.querySelector("#content");
  // change content bg color
  bg.style.background = color;
}

export { changeColors };
