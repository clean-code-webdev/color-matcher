// delete previously display colors
function deletePreviouslyDisplayedColor(fontColors, bgColors) {
    let trash = document.querySelectorAll('.trash');

    for (let i = 0; i < trash.length; i++) {
        trash[i].addEventListener('click', () => {

            // check if wether color belongs to bg or font
            checkIfBgOrFontColor(trash[i], bgColors, fontColors);
        })
    }
}

// check if wether color belongs to bg or font
function checkIfBgOrFontColor(trash, bgColors, fontColors) {
    // get trash parent
    let parent = trash.parentNode;

    // check if color belongs to bg
    if (parent.classList.contains('prev-bg-color')) {
        // remove click bg color
        removeColors(bgColors, parent);
    }

    // color belongs to font
    // remove click font color
    removeColors(fontColors, parent);
}


//TODO delete repeated funtion in favorite-color.js
// remove bg or font color on click
function removeColors(el, parent) {
    let color = parent.querySelector('.prev-color').style.background;

    // remove spaces
    color = removeSpaces(color);

    // get color index in the array
    let index = getColorIndexInTheArray(el, color);

    // remove color from it's array index
    removeColorFromItsArrayIndex(el, color, index);

    parent.remove();
    return;
}

// remove spaces
function removeSpaces(el) {
    return el = el.replace(/\s/g, '');
}

// get color index in the array
function getColorIndexInTheArray(el, color) {
    return el = el.indexOf(color);
}

// remove color from it's array index
function removeColorFromItsArrayIndex(el, color, index) {
    while (el.indexOf(color) !== -1) {
        el[index] = '';
    }
}


export { deletePreviouslyDisplayedColor }