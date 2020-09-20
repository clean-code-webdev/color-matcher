




function displayPreviouslyDisplayedColors(el, prevColor) {
    // get previously generated bg/font colors holder
    const colorHolder = document.querySelector(`#prev-${el}-colors-holder`);
    // create new ul
    let ul = document.createElement('ul');

    // empty previously generated colors holder
    colorHolder.innerHTML = '';


    for (let i = 0; i < prevColor.length; i++) {

        if (prevColor[i] !== '') {
            // create new li
            let li = document.createElement('li');
            // add class to li
            li.className = `prev-${el}-color prev`;

            let trash = document.createElement('div');
            trash.classList.add('trash');
            trash.innerHTML = `<p><i class="fas fa-times"></i></p>`

            // create a previously generate color holder
            let color = document.createElement('div');
            color.className = `prev-color`;
            color.innerHTML = '<div class="wave"></div>'
            color.style.background = prevColor[i];

            // create a favorite icon
            let icon = document.createElement('div');
            icon.className = 'icon';
            icon.innerHTML = `<p class="fav-icon-off"><i class="far fa-heart"></i></p>
            <p class="fav-icon-on"><i class="fas fa-heart"></i></p>`



            // append color and icon to li
            li.append(icon, color, trash)
            // append li to ul

            ul.append(li);

            // append ul to previously generated bg/font colors holder
            colorHolder.appendChild(ul);

        }

    }
}



export { displayPreviouslyDisplayedColors };