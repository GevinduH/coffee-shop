const products = [
    {
      "name": "Irish coffee",
      "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      "price": "7.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Kahlua coffee",
      "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      "price": "7.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Honey raf",
      "description": "Espresso with frothed milk, cream and aromatic honey",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Ice cappuccino",
      "description": "Cappuccino with soft thick foam in summer version with ice",
      "price": "5.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Espresso",
      "description": "Classic black coffee",
      "price": "4.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Latte",
      "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Latte macchiato",
      "description": "Espresso with frothed milk and chocolate",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Coffee with cognac",
      "description": "Fragrant black coffee with cognac and whipped cream",
      "price": "6.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Moroccan",
      "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      "price": "4.50",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Ginger",
      "description": "Original black tea with fresh ginger, lemon and honey",
      "price": "5.00",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Cranberry",
      "description": "Invigorating black tea with cranberry and honey",
      "price": "5.00",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Sea buckthorn",
      "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      "price": "5.50",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Marble cheesecake",
      "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      "price": "3.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Red velvet",
      "description": "Layer cake with cream cheese frosting",
      "price": "4.00",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Cheesecakes",
      "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Creme brulee",
      "description": "Delicate creamy dessert in a caramel basket with wild berries",
      "price": "4.00",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Pancakes",
      "description": "Tender pancakes with strawberry jam and fresh strawberries",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Honey cake",
      "description": "Classic honey cake with delicate custard",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Chocolate cake",
      "description": "Cake with hot chocolate filling and nuts with dried apricots",
      "price": "5.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Black forest",
      "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      "price": "6.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    }
  ]
const coffeeSelector = document.getElementById("coffee-Selector")
const teaSelector = document.getElementById("tea-Selector")
const dessertSelector = document.getElementById("dessert-Selector")
const grid = document.getElementById("menu-grid");
const menuGrid = document.getElementById("menu-grid")
const navMenuButton = document.getElementById("coffee-menu")
const navMenuButtonHome =document.getElementById("coffee-menu-homepage")
 
let total;
function addToSize(value,i) {
  total = value+total;
  console.log(total)
  document.querySelector('.total h3:last-child').innerText = `$${total.toFixed(2)}`;
  return total
}
function addAdditives(value,i){
  total = total+value;
  console.log(total)
  document.querySelector('.total h3:last-child').innerText = `$${total.toFixed(2)}`;
  return total;
}

function createModal(x, imageIndex, i) {
  total = parseInt(products[i].price);
  menuGrid.innerHTML += `
  <dialog class="modal">
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
                  <p class="Additives-p">Size</p>
                  <div class="Additives-button-set">
                      <button class="modal-size-btn button" onclick="addToSize(${products[i].sizes.s['add-price']},'${i}')">
                          <span class="coffee-size button">S</span>
                          ${products[i].sizes.s.size}
                      </button>
                      <button class="modal-size-btn button" onclick="addToSize(${products[i].sizes.m['add-price']},'${i}')">
                          <span class="coffee-size button">M</span> 
                          ${products[i].sizes.m.size}
                      </button>
                      <button class="modal-size-btn button" onclick="addToSize(${products[i].sizes.l['add-price']},'${i}')">
                          <span class="coffee-size button">L</span> 
                          ${products[i].sizes.l.size}
                      </button>
                  </div>
              </div>
              <div class="modal-additives">
                  <p class="Additives-p">Additives</p>
                  <div class="Additives-button-set">
                      ${products[i].additives.map((additive,index) => `
                        <button class="modal-Additives-btn button" id="Additives-${index+1}" onclick="addAdditives(${additive["add-price"]},'${i}')">
                         <span class="coffee-Additives button">${index+1}</span> ${additive.name}
                      </button>`)}
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

function openModal(x, imageIndex, i) {
  createModal(x, imageIndex, i);
  document.querySelector('.modal').showModal();
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.close();
  modal.remove();
}

function createMenuGrid(x){
    let gridContent=""; 
    let imageIndex = 1;
    for (let i=0;i<products.length;i++) {
        if (products[i].category === x) { 
            gridContent += ` 
                    <div class="preview" id="previewCard" onclick="openModal('${x}',${imageIndex},${i})">
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
    
    return grid.innerHTML = gridContent;
}

coffeeSelector.addEventListener("click",(e)=>{
    e.preventDefault();
    createMenuGrid(coffeeSelector.value)
});

teaSelector.addEventListener("click",(e)=>{
    e.preventDefault();
    createMenuGrid(teaSelector.value)
});

dessertSelector.addEventListener("click",(e)=>{
    e.preventDefault();
    createMenuGrid(dessertSelector.value)
});

navMenuButtonHome.addEventListener("click",()=>{
  setTimeout(createMenuGrid(coffeeSelector.value),1000);
})

var indexValue = 1;
console.log("🚀 ~ indexValue:", indexValue)
document.addEventListener('DOMContentLoaded', () => {
  console.log(indexValue)
  showImage(indexValue);
  
  const rightBtn = document.querySelector('.right-btn');
  console.log("🚀 ~ document.addEventListener ~ rightBtn:", rightBtn)
  const leftBtn = document.querySelector('.left-btn');
  console.log("🚀 ~ document.addEventListener ~ leftBtn:", leftBtn)

  rightBtn.addEventListener('click', () => side_slide(1));
  leftBtn.addEventListener('click', () => side_slide(-1));
});



navMenuButton.addEventListener("click",(e)=>{
  e.preventDefault();
  createMenuGrid(coffeeSelector.value);
})


function btn_Slider(e) {
  console.log(e)
  console.log(indexValue)
  showImage(e)
}

function side_slide(e) {
  console.log(e)
  console.log(indexValue)
  showImage(indexValue || e )
}


function showImage(e){
  let i;
  const img = document.querySelectorAll(".slider-image");
  console.log("🚀 ~ showImage ~ img:", img)
  const sliders = document.querySelectorAll(".controls div")
  console.log("🚀 ~ showImage ~ sliders:", sliders)
  if (e > img.length) {indexValue = 1};
  if (e <  1) {indexValue = img.length}
  
  img.forEach((img, i) => {
    img.style.transform = `translateX(${(i - (indexValue - 1)) * 100}%)`;
  });

  sliders.forEach((slider, i) => {
    slider.style.background = "#C1B6AD";
  });

  console.log("🚀 ~ showImage ~ indexValue:", indexValue)
  img[indexValue-1].style.display = "block";
  
  sliders[indexValue-1].style.background = "#665F55";
}

