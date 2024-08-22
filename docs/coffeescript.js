const coffeeSelector = document.getElementById("coffee-Selector");
const teaSelector = document.getElementById("tea-Selector");
const dessertSelector = document.getElementById("dessert-Selector");
const grid = document.getElementById("menu-grid");
const menuGrid = document.getElementById("menu-grid");
const menuButton = document.getElementById("coffee-menu");
const coffee_modal = document.getElementById(".modal");
const navModal = document.querySelector(".nav-modal");
let total;
let lastValue;
let products;
let productsLength;

// reading the material.JSON file
async function fetchData() {
  const response = await fetch("./material.json");
  products = await response.json();
  productsLength = products.length;
  createMenuGrid(coffeeSelector.value);
}

fetchData();

// script for creating grids
function createMenuGrid(x) {
  let gridContent = "";
  let imageIndex = 1;
  for (let i = 0; i < productsLength; i++) {
    if (products[i].category === x) {
      gridContent += ` 
                    <div class="preview" id="previewCard${
                      i + 1
                    }" onclick="openModal('${x}',${imageIndex},${i})">
                    <img
                        src="./images/${x}-${imageIndex}.jpg"
                        alt="Photo of a ${x}"
                        class="preview image" />
                    <h3 class="price-text coffee-name">${products[i].name}</h3>
                    <p class="coffee-description">
                    ${products[i].description}
                    </p>
                    <h3 class="price-text">$${products[i].price}</h3>
                    </div>`;
      imageIndex++;
    }
  }
  return (grid.innerHTML = gridContent);
}

coffeeSelector.addEventListener("click", (e) => {
  e.preventDefault();
  createMenuGrid(coffeeSelector.value);
});

teaSelector.addEventListener("click", (e) => {
  e.preventDefault();
  createMenuGrid(teaSelector.value);
});

dessertSelector.addEventListener("click", (e) => {
  e.preventDefault();
  createMenuGrid(dessertSelector.value);
});

// script for the  coffee-modal calculations
function checkSizeS(value) {
  value = Math.abs(value);
  total = Math.abs(total);
  const sizeS = document.getElementById("size-s");
  total -= lastValue;
  if (sizeS.checked === true) {
    total += value;
  }
  lastValue = value;
  document.querySelector(".total h3:last-child").innerText = `$${total.toFixed(
    2
  )}`;
  return total;
}

function checkSizeM(value) {
  value = Math.abs(value);
  total = Math.abs(total);
  const sizeM = document.getElementById("size-m");
  total -= lastValue;
  if (sizeM.checked === true) {
    total += value;
  }
  lastValue = value;
  document.querySelector(".total h3:last-child").innerText = `$${total.toFixed(
    2
  )}`;
  return total;
}

function checkSizeL(value) {
  value = Math.abs(value);
  total = Math.abs(total);
  const sizeL = document.getElementById("size-l");
  total -= lastValue;
  if (sizeL.checked === true) {
    total += value;
  }
  lastValue = value;
  document.querySelector(".total h3:last-child").innerText = `$${total.toFixed(
    2
  )}`;
  return total, lastValue;
}

function additive1(value, i) {
  value = Math.abs(value);
  total = Math.abs(total);
  const additive1 = document.getElementById("additives1");
  if (additive1.checked === true) {
    total += value;
  } else {
    total -= value;
  }
  document.querySelector(".total h3:last-child").innerText = `$${total.toFixed(
    2
  )}`;
  return total;
}

function additive2(value, i) {
  value = Math.abs(value);
  total = Math.abs(total);
  const additive2 = document.getElementById("additives2");
  if (additive2.checked === true) {
    total += value;
  } else {
    total -= value;
  }
  document.querySelector(".total h3:last-child").innerText = `$${total.toFixed(
    2
  )}`;
  return total;
}

function additive3(value, i) {
  value = Math.abs(value);
  total = Math.abs(total);
  const additive3 = document.getElementById("additives3");
  if (additive3.checked === true) {
    total += value;
  } else {
    total -= value;
  }
  document.querySelector(".total h3:last-child").innerText = `$${total.toFixed(
    2
  )}`;
  return total;
}

//  script for creating/opening/closing modals
function createModal(x, imageIndex, i) {
  total = products[i].price;
  lastValue = Math.abs(products[i].sizes.s["add-price"]);
  menuGrid.innerHTML += `
    <dialog class="modal" id="modal">
        <div class="modal-container">
            <div class="box">
                <img
                    src="./images/${x}-${imageIndex}.jpg"
                    alt="Photo of a ${x}"
                    class="preview image" />
            </div>
            <div class="modal-description">
                <div class="modal-title">
                    <h3 style="margin-top: 0; margin-bottom: 15px">
                        ${products[i].name}
                    </h3>
                    <p style="margin-bottom: 0">
                        ${products[i].description}
                    </p>
                </div>
                <div class="modal-size">
                    <p class="additives-p">Size</p>
                    <div class="additives-button-set">
                        <div>
                          <input type="radio" value="${
                            products[i].sizes.s["add-price"]
                          }" name="Size"
                          id="size-s" class="modal-size-btn button" onclick="checkSizeS(${
                            products[i].sizes.s["add-price"]
                          })" checked>
                          <label class="modal-size-label button">
                            <span class="coffee-size button">S</span>
                            ${products[i].sizes.s.size}
                          </label>
                        </div>

                        <div>
                          <input class="modal-size-btn button" type="radio" id="size-m" value="${
                            products[i].sizes.m["add-price"]
                          }" name="Size" onclick="checkSizeM(${
    products[i].sizes.m["add-price"]
  }
                          )">
                          <label class="modal-size-label button">
                            <span class="coffee-size button">M</span>
                            ${products[i].sizes.m.size}
                          </label>
                        </div>

                        <div>
                          <input class="modal-size-btn button" type="radio" value="${
                            products[i].sizes.l["add-price"]
                          }"
                           name="Size" id="size-l"
                          onclick="checkSizeL(${
                            products[i].sizes.l["add-price"]
                          })">
                          <label class="modal-size-label button">
                            <span class="coffee-size button">L</span>
                            ${products[i].sizes.l.size}
                          </label>
                        </div>
                    </div>
                </div>
                <div class="modal-additives">
                  <p class="additives-p">Additives</p>
                  <div class="additives-button-set">
                      ${products[i].additives
                        .map(
                          (additive, index) => `
                          <div>
                            <input type="checkbox" class="modal-Additives-input" id="additives${
                              index + 1
                            }" name="${additive.name}" value="${
                            additive["add-price"]
                          }" onclick="additive${index + 1}(${
                            additive["add-price"]
                          },'${i}')">
                              <label class="modal-Additives-label button" id="label-Additives${
                                index + 1
                              }">
                                <span class="coffee-Additives button">
                                ${index + 1}
                                </span> ${additive.name}
                              </label>
                          </div>`
                        )
                        .join("")}
                  </div>
                </div>
                <div class="total">
                      <h3>Total:</h3>
                      <h3>$${total || products[i].price}</h3>
                    </div>
                    <hr class="modal-hr" />
                    <div class="alert">
                      <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_268_12877)">
                            <path
                              d="M8 7.66663V11"
                              stroke="#403F3D"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path
                              d="M8 5.00667L8.00667 4.99926"
                              stroke="#403F3D"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path
                              d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
                              stroke="#403F3D"
                              stroke-linecap="round"
                              stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_268_12877">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p class="alert-p caption">
                        The cost is not final. Download our mobile app to see the
                        final price and place your order. Earn loyalty points and
                        enjoy your favorite coffee with up to 20% discount.
                      </p>
                    </div> 
                <button class="modal-Close button" onclick="closeModal()">Close</button>
            </div>
        </div>
    </dialog>`;
}

function closeModal() {
  const modal = document.querySelector(".modal");
  document.body.style.position = "";
  document.body.style.top = "";
  modal.close();
  modal.remove();
}

function openModal(x, imageIndex, i) {
  createModal(x, imageIndex, i);
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
  const modal = document.querySelector(".modal");
  modal.showModal();
}

// script for the navigation modal
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
