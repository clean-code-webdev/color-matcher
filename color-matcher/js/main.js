import * as btnanimation from "./modules/btn-click-animation.js";
import * as genColor from "./modules/generate-color.js";
import * as bgColor from "./modules/create-bg-color.js";
import * as fontColor from "./modules/create-font-color.js";
import * as minMax from "./modules/max-min-content.js";
import * as populateHtml from "./modules/populate-html-elements.js";
import * as displayPrevColors from "./modules/display-prev-colors.js";
import * as changeColor from "./modules/change-colors.js";
import * as fav from "./modules/favorite-color.js";
import * as del from "./modules/delete-colors.js";
import * as perfCount from "./modules/performance-counter.js";
import * as fillFav from "./modules/fill-fav-icons.js";
import * as adblock from "./modules/adblock-checker.js";
import * as currColor from "./modules/display-current-color.js";
import * as copyColor from "./modules/copy-color-onclick.js";
import * as contrast from "./modules/change-prev-displayed-color-font-color.js";
import * as daynight from "./modules/day-night-mode.js";

// stores vairalbes
let obj = {
  bgColors: [],
  fontColors: [],
  favFontColor: [],
  favBgColor: [],
  performanceCheck: true,
  displayAdblockInfo: true,
};

// populate content box
populateHtml.populateContent();
populateHtml.populateBtnHolder();

// copy displayed bg/font color code on click
copyColor.copyDisplayedColorCodeOnClick("bg");
copyColor.copyDisplayedColorCodeOnClick("font");

function clickAction() {
  // display previously displayed bg colors
  displayPrevColors.displayPreviouslyDisplayedColors("bg", obj.bgColors);
  // display previously displayed font colors
  displayPrevColors.displayPreviouslyDisplayedColors("font", obj.fontColors);

  // change font/bg color when previously displayed color is clicked
  changeColor.changeColors();

  // add/remove favorite color
  fav.addFavColor(obj.favFontColor, obj.favBgColor);

  // delete previously displayed icons
  del.deletePreviouslyDisplayedColor(obj.fontColors, obj.bgColors);

  // count performance counter
  perfCount.counter(obj);

  // fill/empty favorite icons
  fillFav.fillFavIcons(obj.favBgColor);
  fillFav.fillFavIcons(obj.favFontColor);

  // show currently displayed bg/font colos
  currColor.diplayCurrentColor("bg");
  currColor.diplayCurrentColor("font");
  currColor.displayColorWhenPreviouslyDisplayedColorIsClicked("bg");
  currColor.displayColorWhenPreviouslyDisplayedColorIsClicked("font");

  // add contrast to font color based on it's currentely displayed color's rgb display bg color
  contrast.getContrast("bg");
  contrast.getContrast("font");
  contrast.addContrastOnPrevColorClick();

  // animate btb on click
  btnanimation.btnClickAnimation("font");
  btnanimation.btnClickAnimation("bg");
  btnanimation.func();
}

// generate new bg color on click
document.querySelector("#bg-btn").addEventListener("click", () => {
  let newColor = genColor.generateColor();

  // generate a new color and fill content bg
  bgColor.createNewBgColor(newColor);

  // push newly generate color to obj.bgColors/obj.fontColors arrays
  obj.bgColors.unshift(newColor);

  // this function puts every function run by click action in the color generating buttons
  clickAction();
});

// generate new font color onclick
document.querySelector("#font-btn").addEventListener("click", () => {
  let newColor = genColor.generateColor();

  // generate a new color and fill content bg
  fontColor.createNewFontColor(newColor);
  // push newly generate color to obj.bgColors/obj.fontColors arrays
  obj.fontColors.unshift(newColor);

  // this function puts every function run by click action in the color generating buttons
  clickAction();
});

// generate new random font/bg colors on click
document.querySelector("#random-btn").addEventListener("click", () => {
  let newFontColor = genColor.generateColor();
  let newBgColor = genColor.generateColor();

  // generate a new color and fill content bg
  bgColor.createNewBgColor(newBgColor);
  fontColor.createNewFontColor(newFontColor);

  // push newly generate color to obj.bgColors/obj.fontColors arrays
  obj.bgColors.unshift(newBgColor);
  obj.fontColors.unshift(newFontColor);

  // this function puts every function run by click action in the color generating buttons
  clickAction();
});

// generate random font/bg colors on load
window.onload = () => {
  let newFontColor = genColor.generateColor();
  let newBgColor = genColor.generateColor();

  // generate a new color and fill content bg
  bgColor.createNewBgColor(newBgColor);
  fontColor.createNewFontColor(newFontColor);

  // push newly generate color to obj.bgColors/obj.fontColors arrays
  obj.bgColors.unshift(newBgColor);
  obj.fontColors.unshift(newFontColor);

  // TODO fix this function
  // check if adblock is on
  // adblock.func();
  // obj.displayAdblockInfo = false

  // this function puts every function run by click action in the color generating buttons
  clickAction();

  daynight.dayNightMode();
};

// maximize content box
document.querySelector("#maximize").addEventListener("click", () => {
  minMax.maximizeContent();
});

// minimize content box
document.querySelector("#minimize").addEventListener("click", () => {
  minMax.minimizeContent();
});
