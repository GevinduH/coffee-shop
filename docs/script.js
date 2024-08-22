const navMenuButton = document.getElementById("coffee-menu");
const menuButton = document.getElementById("button-icon-burger");
const navModal = document.querySelector(".nav-modal");
const sliderContainer = document.getElementById("sliderContainer");
let indexValue = 1;
let slideInterval;
let touchStartX = 0;
let touchEndX = 0;

showImage(indexValue);
startInterval();

// Touch events for slider
sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener("touchmove", (e) => {
  touchEndX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener("touchend", (e) => {
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) {
      resetTime();
      side_slide(-1);
    } else {
      resetTime();
      side_slide(1);
    }
  }
}

function startInterval() {
  slideInterval = setInterval(() => {
    side_slide(1);
  }, 5000);
}

function resetTime() {
  clearInterval(slideInterval);
  startInterval();
}

function btn_Slider(e) {
  resetTime();
  showImage((indexValue = e));
}

function side_slide(e) {
  indexValue += e;
  resetTime();
  showImage(indexValue);
}

function showImage(e) {
  const img = document.querySelectorAll(".slider-image");
  const sliders = document.querySelectorAll(".controls div");
  if (e > img.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = img.length;
  }
  img.forEach((img, i) => {
    img.style.transform = `translateX(${(i - (indexValue - 1)) * 100}%)`;
  });
  sliders.forEach((slider, i) => {
    slider.style.background = "#C1B6AD";
  });
  img[indexValue - 1].style.display = "block";
  sliders[indexValue - 1].style.background = "#665F55";
}

function openNavModal() {
  navModal.classList.add("nav-modal-flex");
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
  navModal.showModal();
}

function closeNavModal() {
  navModal.classList.remove("nav-modal-flex");
  document.body.style.position = "";
  document.body.style.top = "";
  navModal.close();
}
