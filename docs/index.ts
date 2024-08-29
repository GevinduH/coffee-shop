const navModal = document.getElementById("navModal");
const sliderContainer = document.getElementById("sliderContainer");
let indexValue: number = 1;
let slideInterval: any;
let touchStartX: number = 0;
let touchEndX: number = 0;

showImage(indexValue);
startInterval();

// Touch events for slider
if (!sliderContainer) {
  throw new Error("slider Container is NULL");
}
sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener("touchmove", (e) => {
  touchEndX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener("touchend", (e) => {
  handleSwipe();
});

function handleSwipe(): void {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) {
      resetTime();
      sideSlide(-1);
    } else {
      resetTime();
      sideSlide(1);
    }
  }
}

function startInterval(): void {
  slideInterval = setInterval(() => {
    sideSlide(1);
  }, 5000);
}

function resetTime(): void {
  clearInterval(slideInterval);
  startInterval();
}

function btnSlider(e: number): void {
  resetTime();
  showImage((indexValue = e));
}

function sideSlide(e: number): void {
  indexValue += e;
  resetTime();
  showImage(indexValue);
}

function showImage(e: number): void {
  const img = document.querySelectorAll<HTMLElement>(".slider-image")!;
  const sliders = document.querySelectorAll<HTMLElement>(".controls div")!;
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

function openNavModal(): void {
  if (!navModal) {
    throw new Error("navModal failed to load");
  }
  navModal.classList.add("navModalFlex");
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
  (navModal as any).showModal();
}

function closeNavModal(): void {
  if (!navModal) {
    throw new Error("navModal failed to load");
  }
  navModal.classList.remove("navModalFlex");
  document.body.style.position = "";
  document.body.style.top = "";
  (navModal as any).close();
}
