const navMenuButton = document.getElementById("coffee-menu")
const menuButton = document.getElementById("button-icon-burger")
const nav_Open_CloseBtn = document.getElementById("nav-open-close")
const nav_modal = document.querySelector('.nav-modal')
var indexValue = 1;
let slideInterval;

showImage(indexValue);
startInterval();

function startInterval() {
    slideInterval = setInterval(() => {
    side_slide(1);
  }, 3000);
}

function resetTime() {
  clearInterval(slideInterval);
  startInterval()
}

function btn_Slider(e) {
  resetTime()
  showImage(indexValue = e)
}

function side_slide(e) {
  indexValue += e;
  resetTime()
  showImage(indexValue)
}

function showImage(e){
  const img = document.querySelectorAll(".slider-image");
  const sliders = document.querySelectorAll(".controls div")
  if (e > img.length) {
    indexValue = 1
  };
  if (e <  1) { 
    indexValue = img.length
  };
  
  img.forEach((img, i) => {
    img.style.transform = `translateX(${(i - (indexValue - 1)) * 100}%)`;
  });

  sliders.forEach((slider, i) => {
    slider.style.background = "#C1B6AD";
  });

  img[indexValue-1].style.display = "block";
  
  sliders[indexValue-1].style.background = "#665F55";
}


function openNavModal() {
  nav_modal.classList.add("nav-modal-flex")
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
  nav_modal.showModal();
}

function closeNavModal() {
  nav_modal.classList.remove("nav-modal-flex")
  document.body.style.position = '';
  document.body.style.top = '';
  nav_modal.close();
}

