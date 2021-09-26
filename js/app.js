// ============== Selecting the needed elements ==============
const imgs = Array.from(document.querySelectorAll("img"));
const parentLayer = document.querySelector(".parentLayer");
const childLayer = document.querySelector(".childLayer");

const close = document.querySelector(".close");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

// ================ Pup-up when click on any of the images ================
let currentImgIndex;
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", (e)=> {
        let theImgSrc = e.target.getAttribute("src");
        currentImgIndex = imgs.indexOf(e.target);
        parentLayer.classList.replace("d-none", "d-flex");
        childLayer.style.backgroundImage = `url(${theImgSrc})`;
    })
}


// ================ Close Function ================
close.addEventListener("click", ()=> {
    parentLayer.classList.replace("d-flex", "d-none");
});

// ================ Right Arrow Function ================
rightArrow.addEventListener("click", ()=> {
    currentImgIndex++;
    if (currentImgIndex == imgs.length) {
        currentImgIndex = 0;
    }
    let theNextImg = imgs[currentImgIndex].getAttribute("src");
    childLayer.style.backgroundImage = `url(${theNextImg})`;
});

// ================ Left Arrow Function ================
leftArrow.addEventListener("click", ()=> {
    currentImgIndex--;
    if (currentImgIndex == -1) {
        currentImgIndex = imgs.length - 1;
    }
    let thePrevImg = imgs[currentImgIndex].getAttribute("src");
    childLayer.style.backgroundImage = `url(${thePrevImg})`;
});