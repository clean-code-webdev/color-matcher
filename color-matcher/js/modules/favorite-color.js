function addFavColor(favFontColors, favBgColors) {
    // get icon
    let icon = document.querySelectorAll('.icon');

    for (let i = 0; i < icon.length; i++) {
        icon[i].addEventListener('click', () => {
            // get color
            let parent = icon[i].parentNode;

            // add/remove font color to favFontColors
            if (parent.classList.contains('prev-font-color')) {
                // add/remove font color to favFontColors
                addAndRemoveFavoriteColor(favFontColors, icon[i]);
                return;
            }

            // add/remove bg color to favBgColors
            addAndRemoveFavoriteColor(favBgColors, icon[i]);
        });
    }
}

function addAndRemoveFavoriteColor(colorGroup, icon) {
    let color = icon.parentNode.querySelector('.prev-color').style.background
    // add color
    if (!colorGroup.includes(color)) {
        // fill/empty favorite icon
        fillAndEmptyFavoriteIcon(icon, 'on');
        pushFavColor(colorGroup, color);
    }
    // remove color
    else {
        // fill/empty favorite icon
        fillAndEmptyFavoriteIcon(icon, 'off');
        popFavColor(colorGroup, color);
    }
}

// add color to group of favorite colors
function pushFavColor(colorGroup, color) {
    // add color to group
    colorGroup.push(color);
    console.log(colorGroup);
}

// delete color from group of favorite colors
function popFavColor(colorGroup, color) {
    popColorWhenFavIconIsTurnedOff(colorGroup, color)
    console.log(colorGroup);
}

// ----------------------
// ----------------------

//TODO delete repeated funtion in delete-colors.js
// remove bg or font color on click
function popColorWhenFavIconIsTurnedOff(el, color) {
    // get color index in the array
    let index = getColorIndexInTheArray(el, color);

    // remove color from it's array index
    removeColorFromItsArrayIndex(el, color, index);
    return;
}

// get color index in the array
function getColorIndexInTheArray(el, color) {
    return el.indexOf(color);
}

// remove color from it's array index
function removeColorFromItsArrayIndex(el, color, index) {
    while (el.indexOf(color) !== -1) {
        el[index] = '';
    }
}

// ----------------------
// ----------------------

// fill/empty favorite icon
function fillAndEmptyFavoriteIcon(icon, onOffState) {
    // empty favorite icon
    if (onOffState === 'off') {
        emptyFavoriteColorIcon(icon);
        return;
    }

    // fill favorite icon
    fillFavoriteColorIcon(icon);
}


// fill favorite color icon
function fillFavoriteColorIcon(icon) {
    icon.querySelector('.fav-icon-off').style.display = 'none';
    icon.querySelector('.fav-icon-on').style.display = 'block';
}

// empty favorite color icon
function emptyFavoriteColorIcon(icon) {
    icon.querySelector('.fav-icon-off').style.display = 'block';
    icon.querySelector('.fav-icon-on').style.display = 'none';

}


export { addFavColor };