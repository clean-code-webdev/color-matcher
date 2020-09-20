
function btnClickAnimation(el) {
    let element = document.querySelector(`#${el}-btn`);
    let color = document.querySelector(`#curr-${el}-color`).innerHTML;

    element.style.border = `1px solid ${color}`;
    element.style.boxShadow = `1px 1px 25px 5px ${color}`;
}


function func() {
    let color = document.querySelectorAll('.prev-color');

    for (let i = 0; i < color.length; i++) {
        color[i].addEventListener('click', () => {
            btnClickAnimation('font');
            btnClickAnimation('bg');
        })
    }
}


export { btnClickAnimation, func };