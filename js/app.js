// ============== Selecting the needed elements ==============
const imgs = document.querySelectorAll("img");
const parentLayer = document.querySelector(".parentLayer");
const childLayer = document.querySelector(".childLayer");

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", (e)=> {
        let theImgSrc = e.target.getAttribute("src");
        parentLayer.classList.replace("d-none", "d-flex");
        childLayer.style.backgroundImage = `url(${theImgSrc})`;
    })
}