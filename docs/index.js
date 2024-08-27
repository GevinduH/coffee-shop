var navMenuButton = document.getElementById("coffee-menu");
var menuButton = document.getElementById("button-icon-burger");
var navModal = document.getElementById("navModal");
var sliderContainer = document.getElementById("sliderContainer");
var indexValue = 1;
var slideInterval;
var touchStartX = 0;
var touchEndX = 0;
showImage(indexValue);
startInterval();
// Touch events for slider
if (!sliderContainer) {
    throw new Error('slider Container is NULL');
}
sliderContainer.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
});
sliderContainer.addEventListener("touchmove", function (e) {
    touchEndX = e.changedTouches[0].screenX;
});
sliderContainer.addEventListener("touchend", function (e) {
    handleSwipe();
});
function handleSwipe() {
    var swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance > 0) {
            resetTime();
            sideSlide(-1);
        }
        else {
            resetTime();
            sideSlide(1);
        }
    }
}
function startInterval() {
    slideInterval = setInterval(function () {
        sideSlide(1);
    }, 5000);
}
function resetTime() {
    clearInterval(slideInterval);
    startInterval();
}
function btnSlider(e) {
    resetTime();
    showImage((indexValue = e));
}
function sideSlide(e) {
    indexValue += e;
    resetTime();
    showImage(indexValue);
}
function showImage(e) {
    var img = document.querySelectorAll(".slider-image");
    var sliders = document.querySelectorAll(".controls div");
    if (e > img.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = img.length;
    }
    img.forEach(function (img, i) {
        img.style.transform = "translateX(".concat((i - (indexValue - 1)) * 100, "%)");
    });
    sliders.forEach(function (slider, i) {
        slider.style.background = "#C1B6AD";
    });
    img[indexValue - 1].style.display = "block";
    sliders[indexValue - 1].style.background = "#665F55";
}
function openNavModal() {
    if (!navModal) {
        throw new Error('navModal failed to load');
    }
    navModal.classList.add("navModalFlex");
    document.body.style.position = "fixed";
    document.body.style.top = "-".concat(window.scrollY, "px");
    navModal.showModal();
}
function closeNavModal() {
    if (!navModal) {
        throw new Error('navModal failed to load');
    }
    navModal.classList.remove("navModalFlex");
    document.body.style.position = "";
    document.body.style.top = "";
    navModal.close();
}
