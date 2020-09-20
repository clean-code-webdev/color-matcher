function func() {



    // wait for some time before checking if adblock is on
    setTimeout(function () {
        // adblock is on
        if (typeof (window.google_jobrunner) === "undefined") {
            let x = document.querySelectorAll('#prev-bg-colors-holder');

            x.style.display = 'none';

            popupAdblockInfo();

            closePopup();

            console.log("ad blocker installed");

        } else {
            console.log("no ad blocking found.");
        }
    }, 2000);



};


function popupAdblockInfo() {
    let div = document.createElement('div');
    div.id = 'adblock-popup';

    div.innerHTML = `
        <p>To have acces to all functions disable adblock.</p>
        <button>ok</button>
    `;

    document.body.appendChild(div)
}

// close popup about performance
function closePopup() {
    let popup = document.querySelector('#adblock-popup');
    let btn = popup.querySelector('button');

    btn.addEventListener('click', () => {
        popup.style.animation = 'up-slide 0.5s forwards ease-out';
    });

}



export { func }