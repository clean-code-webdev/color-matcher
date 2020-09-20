function diplayCurrentColor(el) {
    let color = document.querySelector('#content-title').style.color;
    let colorDisplay = document.querySelector('#prev-font-header > .current-color');

    if (el === 'bg') {
        color = document.querySelector('#content').style.background;
        colorDisplay = document.querySelector('#prev-bg-header > .current-color');
    }

    colorDisplay.innerHTML = color;
    colorDisplay.style.background = color;
}


function displayColorWhenPreviouslyDisplayedColorIsClicked(el) {
    let prevColor = document.querySelectorAll(`.prev-${el}-color > .prev-color`);

    for (let i = 0; i < prevColor.length; i++) {
        prevColor[i].addEventListener('click', () => {
            diplayCurrentColor(el);
        });
    }
}



export { diplayCurrentColor, displayColorWhenPreviouslyDisplayedColorIsClicked };