function counter(obj) {

    if (obj.performanceCheck) {
        if (obj.bgColors.length === 20 || obj.fontColors.length === 20) {
            // show popup about performance
            showPermonceInfo();

            // close popup about performance
            closePopup();

            // disable performance check
            obj.performanceCheck = false;
        }
    }
}

// show popup about performance
function showPermonceInfo() {
    let div = document.createElement('div');
    div.id = 'perfomance-info';

    div.innerHTML = `
        <p>For a better perfomance consider deleting colors that aren't being used.</p>
        <button>ok</button>
    `;

    document.body.appendChild(div)
}

// close popup about performance
function closePopup() {
    let popup = document.querySelector('#perfomance-info');
    let btn = popup.querySelector('button');

    btn.addEventListener('click', () => {
        popup.style.animation = 'up-slide 0.5s forwards ease-out';
    });

}


export { counter };