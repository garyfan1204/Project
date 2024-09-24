
var previous = document.getElementById("previous");
var next = document.getElementById("next");
let currentIndex = 0;
const images = document.querySelectorAll('#images img');
const totalImages = images.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.getElementById('images').style.transform = `translateX(${offset}%)`;
}

function sequentialImg() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 5000);
}

previous.addEventListener("click", function(event){
    event.preventDefault();
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

next.addEventListener("click", function(event){
    event.preventDefault();
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

sequentialImg(); // 開始自動播放