const coffeeSelector = document.getElementById(
  "coffeeSelector"
) as HTMLInputElement;
const teaSelector = document.getElementById("teaSelector") as HTMLInputElement;
const dessertSelector = document.getElementById(
  "dessertSelector"
) as HTMLInputElement;
const menuGrid = document.getElementById("menuGrid") as HTMLDivElement;
let total: number;
let products: Product[];
let productsLength: number;

//creating a type
type Product = {
  name: string;
  description: string;
  price: string;
  category: string;
  sizes: Size;
  additives: Additives[];
};

type Additives = {
  name: string;
  "add-price": string;
};

type Size = {
  s: SizeObj;
  m: SizeObj;
  l: SizeObj;
};

type SizeObj = {
  size: string;
  "add-price": string;
};

// reading the material.JSON file
async function fetchData() {
  try {
    const response = await fetch("./material.json");
    if (!response.ok) {
      throw new Error("could not fetch data");
    }
    products = await response.json();
    productsLength = products.length;
    if (!coffeeSelector) {
      throw new Error("coffee selector item-value is null");
    }
    createMenuGrid(coffeeSelector.value);
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
}

fetchData();

// script for creating grids
function createMenuGrid(x: string) {
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
  return (menuGrid.innerHTML = gridContent);
}

if (coffeeSelector && teaSelector && dessertSelector) {
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
} else {
  throw new Error("coffee selector item-value is null");
}

// script for the  coffee-modal calculations
function addSize(value: number): void {
  total = Math.abs(total);
  value = Math.abs(value);
  value += total;
  let currentTotal = document.querySelector<HTMLElement>(
    ".total h3:last-child"
  );
  if (currentTotal) {
    currentTotal.innerText = `$${value.toFixed(2)}`;
  } else {
    throw new Error("current Total is NULL");
  }
}

function addAdditive(value: number, id: string): void {
  value = Math.abs(value);
  total = Math.abs(total);
  const additive = document.getElementById(`${id}`) as HTMLInputElement;
  let currentTotal = document.querySelector<HTMLElement>(
    ".total h3:last-child"
  );
  if (additive && currentTotal) {
    total = total + (additive.checked === true ? value : -value);
    currentTotal.innerText = `$${total.toFixed(2)}`;
  } else throw new Error("current Total or additive Element is NULL");
}

//  script for creating/opening/closing modals
function createModal(x: number, imageIndex: number, i: number): void {
  total = parseFloat(products[i].price);
  menuGrid.innerHTML += `
    <dialog class="modal" id="modal">
        <div class="modalContainer">
            <div class="box">
                <img
                    src="./images/${x}-${imageIndex}.jpg"
                    alt="Photo of a ${x}"
                    class="preview image" />
            </div>
            <div class="modalDescription">
                <div class="modalTitle">
                    <h3 style="margin-top: 0; margin-bottom: 15px">
                        ${products[i].name}
                    </h3>
                    <p style="margin-bottom: 0">
                        ${products[i].description}
                    </p>
                </div>
                <div class="modalSize">
                    <p class="additivesP">Size</p>
                    <div class="additivesButtonSet">
                        <div>
                          <input type="radio" value="${
                            products[i].sizes.s["add-price"]
                          }" name="Size"
                          id="size-s" class="modalSizeBtn button" onclick="addSize(${
                            products[i].sizes.s["add-price"]
                          })" checked>
                          <label class="modalSizeLabel button">
                            <span class="coffeeSize button">S</span>
                            ${products[i].sizes.s.size}
                          </label>
                        </div>

                        <div>
                          <input class="modalSizeBtn button" type="radio" id="size-m" value="${
                            products[i].sizes.m["add-price"]
                          }" name="Size" onclick="addSize(${
    products[i].sizes.m["add-price"]
  }
                          )">
                          <label class="modalSizeLabel button">
                            <span class="coffeeSize button">M</span>
                            ${products[i].sizes.m.size}
                          </label>
                        </div>

                        <div>
                          <input class="modalSizeBtn button" type="radio" value="${
                            products[i].sizes.l["add-price"]
                          }"
                           name="Size" id="size-l"
                          onclick="addSize(${
                            products[i].sizes.l["add-price"]
                          })">
                          <label class="modalSizeLabel button">
                            <span class="coffeeSize button">L</span>
                            ${products[i].sizes.l.size}
                          </label>
                        </div>
                    </div>
                </div>
                <div class="modalAdditives">
                  <p class="additivesP">Additives</p>
                  <div class="additivesButtonSet">
                      ${products[i].additives
                        .map(
                          (additive: Additives, index: number) => `
                          <div>
                            <input type="checkbox" class="modalAdditivesInput" id="additives${
                              index + 1
                            }" name="${additive.name}" value="${
                            additive["add-price"]
                          }" onclick="addAdditive(${additive["add-price"]},id)">
                              <label class="modalAdditivesLabel button" id="label-Additives${
                                index + 1
                              }">
                                <span class="coffeeAdditives button">
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
                    <hr class="modalHR" />
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
                      <p class="alertP caption">
                        The cost is not final. Download our mobile app to see the
                        final price and place your order. Earn loyalty points and
                        enjoy your favorite coffee with up to 20% discount.
                      </p>
                    </div> 
                <button class="modalClose button" onclick="closeModal()">Close</button>
            </div>
        </div>
    </dialog>`;
}

function closeModal(): void {
  const modal = document.querySelector(".modal");
  document.body.style.position = "";
  document.body.style.top = "";
  (modal as HTMLDialogElement).close();
  (modal as HTMLDialogElement).remove();
}

function openModal(x: number, imageIndex: number, i: number): void {
  createModal(x, imageIndex, i);
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
  const modal = document.querySelector(".modal");
  (modal as HTMLDialogElement).showModal();
}
