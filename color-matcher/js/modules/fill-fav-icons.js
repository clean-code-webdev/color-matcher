function fillFavIcons(arrayOfFavColorsGroup) {
    let previousColors = document.querySelectorAll('.prev');

    checkPreviouslyDisplayedColorsBgColor(previousColors, arrayOfFavColorsGroup);
}

function checkPreviouslyDisplayedColorsBgColor(previousColors, arrayOfFavColorsGroup) {
    for (let i = 0; i < previousColors.length; i++) {
        let previousDisplayedColor = previousColors[i].querySelector('.prev-color').style.background;

        if (arrayOfFavColorsGroup.includes(previousDisplayedColor)) {
            showFilledFavoriteIcon(previousColors[i]);
        }
    }
}

function showFilledFavoriteIcon(previousColors) {
    let off = previousColors.querySelector('.fav-icon-off');
    let on = previousColors.querySelector('.fav-icon-on');

    off.style.display = 'none';
    on.style.display = 'block';
}


export { fillFavIcons };