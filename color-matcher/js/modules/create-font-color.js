function createNewFontColor(fontColor) {
    let text = document.querySelectorAll('.text');

    for (let i = 0; i < text.length; i++) {
        text[i].style.color = fontColor;
    }
}

export { createNewFontColor };