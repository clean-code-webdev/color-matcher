// content box inner html
let htmlElements = {
    minMaxBtns: `
        <div div id="max-min" >
        <div id="maximize">
            <p>
                <i class="fas fa-expand-arrows-alt"></i>
            </p>
        </div>
        <div id="minimize">
            <p>
                <i class="fas fa-compress-arrows-alt"></i>
            </p>
        </div>
    </div >`,
    prevColorHolders: `
    <!-- previous font colors holder -->
    <div id="prev-font-colors-holder"></div>
    <!-- previous bg colors holder -->
    <div id="prev-bg-colors-holder"></div>
    `
}

// create color generating buttons
function populateBtnHolder() {
    let btnHolder = document.querySelector('#btn-holder');

    let x = `    
    <!-- font -->
    <div class="btn" id="font-btn">
    <p>font</p>
    </div>
    <!-- random -->
    <div class="btn" id="random-btn">
    <p>random</p>
    </div>
    <!-- background -->
    <div class="btn" id="bg-btn">
    <p>bg</p>
    </div>
    `;


    // <p><i class="fas fa-sync-alt"></i></p>
    // <p><i class="fas fa-sync-alt"></i></p>
    // <p><i class="fas fa-pager"></i></p>

    btnHolder.innerHTML = x;
}

// populate content inner html
function populateContent() {
    // create minimize/maximize btns
    crateContent(htmlElements.minMaxBtns)
    // create previous bg/font color holders
    crateContent(htmlElements.prevColorHolders)
}

// crate html elements
function crateContent(el) {
    let content = document.querySelector('#content');

    return content.innerHTML = content.innerHTML + el;
}

export { populateContent, populateBtnHolder };