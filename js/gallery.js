// pop-up gallery

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');

function openPopup(index) {
    currentImageIndex = index;
    document.getElementById("popup").style.display = "block";
    updatePopupImage();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function updatePopupImage() {
    const imgElement = document.getElementById("popup-image");
    imgElement.src = images[currentImageIndex].src;
}

function changeImage(step) {
    currentImageIndex += step;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updatePopupImage();
}

images.forEach((img, index) => {
    img.addEventListener('click', () => openPopup(index));
});
