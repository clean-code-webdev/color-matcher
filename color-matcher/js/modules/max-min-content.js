// minimize content box
function minimizeContent() {
    addAndRemoveMinMaxIcon('minimize', 'maximize');
    changeIcons('minimize');
}

// maximize content box
function maximizeContent() {
    addAndRemoveMinMaxIcon('maximize', 'minimize');
    changeIcons('maximize');
}

// and/remove minimize/maximize icons on click
function addAndRemoveMinMaxIcon(e, j) {
    let content = document.querySelector('#content');

    content.classList.remove(j);
    content.classList.add(e);
}

// change minimize/maximize icon on click
function changeIcons(el) {
    let maxBtn = document.querySelector('#maximize');
    let minBtn = document.querySelector('#minimize');

    if (el === 'maximize') {
        minBtn.style.display = 'block';
        maxBtn.style.display = 'none';
        return;
    }

    minBtn.style.display = 'none';
    maxBtn.style.display = 'block';
}

export { minimizeContent, maximizeContent };
