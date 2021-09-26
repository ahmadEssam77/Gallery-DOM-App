// ============== Selecting the needed elements ==============
const imgs = Array.from(document.querySelectorAll("img"));
const parentLayer = document.querySelector(".parentLayer");
const childLayer = document.querySelector(".childLayer");

const closeBtn = document.querySelector(".close");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

// ================ Pup-up when click on any of the images ================
let currentImgIndex;
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", (e) => {
        let theImgSrc = e.target.getAttribute("src");
        currentImgIndex = imgs.indexOf(e.target);
        parentLayer.classList.replace("d-none", "d-flex");
        childLayer.style.backgroundImage = `url(${theImgSrc})`;
    })
}

// ================ Close Function ================
function close() {
    parentLayer.classList.replace("d-flex", "d-none");
}
closeBtn.addEventListener("click", () => {
    close();
});

// ================ Right Arrow Function ================
function next() {
    currentImgIndex++;
    if (currentImgIndex == imgs.length) {
        currentImgIndex = 0;
    }
    let theNextImg = imgs[currentImgIndex].getAttribute("src");
    childLayer.style.backgroundImage = `url(${theNextImg})`;
}

rightArrow.addEventListener("click", () => {
    next();
});

// ================ Left Arrow Function ================
function previous() {
    currentImgIndex--;
    if (currentImgIndex == -1) {
        currentImgIndex = imgs.length - 1;
    }
    let thePrevImg = imgs[currentImgIndex].getAttribute("src");
    childLayer.style.backgroundImage = `url(${thePrevImg})`;
}

leftArrow.addEventListener("click", () => {
    previous();
});

// ===================================================================================================
// =============== Keyboard Section ===============
document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        next();
    }
    else if (e.key == "ArrowLeft") {
        previous();
    }
    else if (e.key == "Escape") {
        close();
    }
});

// ===================================================================================================
// =============== Another close, when click out side the slider (pop-up) ===============
document.addEventListener("click", function(e) {
    if (e.target == parentLayer) {
        close();
    }
});