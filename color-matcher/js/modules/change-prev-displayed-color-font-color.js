function getContrast(el) {
    // remove all but the numbers from the rbg code
    let fontColor = getOnlyNumbersFromRgbCode(el);

    // split rbg numbers
    let rgb = splitRgbNumbers(fontColor);

    // get yiq value from rgb color
    let yiq = getYiqValue(rgb)

    // check color contrast based on it's yiq rate
    checkColorContrastRate(yiq, el);
}

// remove all but the numbers from the rbg code
function getOnlyNumbersFromRgbCode(el) {
    let fontColor = document.querySelector(`#curr-${el}-color`).innerText;
    return fontColor = fontColor.replace('rgb(', '').replace(')', '');
}

// split rbg numbers
function splitRgbNumbers(fontColor) {
    let arrayOfColors = fontColor.split(',');
    return splitRbgColors(arrayOfColors);
}

function getYiqValue(rgb) {
    return ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
}

// split rgb colors
function splitRbgColors(el) {
    let r = el[0];
    let g = el[1];
    let b = el[2];

    return { r, g, b }
}

// check color contrast based on it's yiq rate
function checkColorContrastRate(yiq, el) {
    if (yiq >= 128) {
        document.querySelector(`#curr-${el}-color`).style.color = 'black';
    } else {
        document.querySelector(`#curr-${el}-color`).style.color = 'white';
    }
}


// -----------------------------------------
// change color on previously displayed color click
function addContrastOnPrevColorClick() {
    let prevColor = document.querySelectorAll('.prev-color');

    for (let i = 0; i < prevColor.length; i++) {

        prevColor[i].addEventListener('click', () => {
            let color = prevColor[i];

            // check whether parent is bg/font and call function getContrast
            checkParentAndAddContrast(color)
        })
    }
}


// check whether parent is bg/font and call function getContrast
function checkParentAndAddContrast(color) {
    let parent = color.parentNode;

    if (parent.classList.contains('prev-font-color')) {
        getContrast('font')
        return;
    }

    getContrast('bg');
}



export { getContrast, addContrastOnPrevColorClick }