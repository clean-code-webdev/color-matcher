function copyDisplayedColorCodeOnClick(el) {
    let currentlyDisplayedColor = document.querySelector(`#curr-${el}-color`);

    currentlyDisplayedColor.addEventListener('click', () => {

        navigator.clipboard.writeText(currentlyDisplayedColor.innerHTML);

        alert(`Color copied successfully: ${currentlyDisplayedColor.innerHTML}`);

    })
}



export { copyDisplayedColorCodeOnClick };