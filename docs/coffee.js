var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var coffeeSelector = document.getElementById("coffeeSelector");
var teaSelector = document.getElementById("teaSelector");
var dessertSelector = document.getElementById("dessertSelector");
var menuGrid = document.getElementById("menuGrid");
var navModal = document.getElementById("navModal");
var total;
var products;
var productsLength;
// reading the material.JSON file
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./material.json")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("could not fetch data");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = _a.sent();
                    productsLength = products.length;
                    if (!coffeeSelector) {
                        throw new Error("coffee selector item-value is null");
                    }
                    createMenuGrid(coffeeSelector.value);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Failed to fetch data", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchData();
// script for creating grids
function createMenuGrid(x) {
    var gridContent = "";
    var imageIndex = 1;
    for (var i = 0; i < productsLength; i++) {
        if (products[i].category === x) {
            gridContent += " \n                    <div class=\"preview\" id=\"previewCard".concat(i + 1, "\" onclick=\"openModal('").concat(x, "',").concat(imageIndex, ",").concat(i, ")\">\n                    <img\n                        src=\"./images/").concat(x, "-").concat(imageIndex, ".jpg\"\n                        alt=\"Photo of a ").concat(x, "\"\n                        class=\"preview image\" />\n                    <h3 class=\"price-text coffee-name\">").concat(products[i].name, "</h3>\n                    <p class=\"coffee-description\">\n                    ").concat(products[i].description, "\n                    </p>\n                    <h3 class=\"price-text\">$").concat(products[i].price, "</h3>\n                    </div>");
            imageIndex++;
        }
    }
    return (menuGrid.innerHTML = gridContent);
}
if (coffeeSelector && teaSelector && dessertSelector) {
    coffeeSelector.addEventListener("click", function (e) {
        e.preventDefault();
        createMenuGrid(coffeeSelector.value);
    });
    // if (!teaSelector) {throw new Error("coffee selector item-value is null")}
    teaSelector.addEventListener("click", function (e) {
        e.preventDefault();
        createMenuGrid(teaSelector.value);
    });
    // if (!dessertSelector) {throw new Error("coffee selector item-value is null")}
    dessertSelector.addEventListener("click", function (e) {
        e.preventDefault();
        createMenuGrid(dessertSelector.value);
    });
}
else
    throw new Error("coffee selector item-value is null");
// script for the  coffee-modal calculations
function addSize(value) {
    total = Math.abs(total);
    value = Math.abs(value);
    value += total;
    var currentTotal = document.querySelector(".total h3:last-child");
    if (currentTotal) {
        currentTotal.innerText = "$".concat(value.toFixed(2));
    }
    else
        throw new Error("current Total is NULL");
}
function addAdditive(value, id) {
    value = Math.abs(value);
    total = Math.abs(total);
    var additive = document.getElementById("".concat(id));
    var currentTotal = document.querySelector(".total h3:last-child");
    if (additive && currentTotal) {
        total = total + (additive.checked === true ? value : -value);
        currentTotal.innerText = "$".concat(total.toFixed(2));
    }
    else
        throw new Error("current Total or additive Element is NULL");
}
//  script for creating/opening/closing modals
function createModal(x, imageIndex, i) {
    total = parseFloat(products[i].price);
    menuGrid.innerHTML += "\n    <dialog class=\"modal\" id=\"modal\">\n        <div class=\"modalContainer\">\n            <div class=\"box\">\n                <img\n                    src=\"./images/".concat(x, "-").concat(imageIndex, ".jpg\"\n                    alt=\"Photo of a ").concat(x, "\"\n                    class=\"preview image\" />\n            </div>\n            <div class=\"modalDescription\">\n                <div class=\"modalTitle\">\n                    <h3 style=\"margin-top: 0; margin-bottom: 15px\">\n                        ").concat(products[i].name, "\n                    </h3>\n                    <p style=\"margin-bottom: 0\">\n                        ").concat(products[i].description, "\n                    </p>\n                </div>\n                <div class=\"modalSize\">\n                    <p class=\"additivesP\">Size</p>\n                    <div class=\"additivesButtonSet\">\n                        <div>\n                          <input type=\"radio\" value=\"").concat(products[i].sizes.s["add-price"], "\" name=\"Size\"\n                          id=\"size-s\" class=\"modalSizeBtn button\" onclick=\"addSize(").concat(products[i].sizes.s["add-price"], ")\" checked>\n                          <label class=\"modalSizeLabel button\">\n                            <span class=\"coffeeSize button\">S</span>\n                            ").concat(products[i].sizes.s.size, "\n                          </label>\n                        </div>\n\n                        <div>\n                          <input class=\"modalSizeBtn button\" type=\"radio\" id=\"size-m\" value=\"").concat(products[i].sizes.m["add-price"], "\" name=\"Size\" onclick=\"addSize(").concat(products[i].sizes.m["add-price"], "\n                          )\">\n                          <label class=\"modalSizeLabel button\">\n                            <span class=\"coffeeSize button\">M</span>\n                            ").concat(products[i].sizes.m.size, "\n                          </label>\n                        </div>\n\n                        <div>\n                          <input class=\"modalSizeBtn button\" type=\"radio\" value=\"").concat(products[i].sizes.l["add-price"], "\"\n                           name=\"Size\" id=\"size-l\"\n                          onclick=\"addSize(").concat(products[i].sizes.l["add-price"], ")\">\n                          <label class=\"modalSizeLabel button\">\n                            <span class=\"coffeeSize button\">L</span>\n                            ").concat(products[i].sizes.l.size, "\n                          </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modalAdditives\">\n                  <p class=\"additivesP\">Additives</p>\n                  <div class=\"additivesButtonSet\">\n                      ").concat(products[i].additives
        .map(function (additive, index) { return "\n                          <div>\n                            <input type=\"checkbox\" class=\"modalAdditivesInput\" id=\"additives".concat(index + 1, "\" name=\"").concat(additive.name, "\" value=\"").concat(additive["add-price"], "\" onclick=\"addAdditive(").concat(additive["add-price"], ",id)\">\n                              <label class=\"modalAdditivesLabel button\" id=\"label-Additives").concat(index + 1, "\">\n                                <span class=\"coffeeAdditives button\">\n                                ").concat(index + 1, "\n                                </span> ").concat(additive.name, "\n                              </label>\n                          </div>"); })
        .join(""), "\n                  </div>\n                </div>\n                <div class=\"total\">\n                      <h3>Total:</h3>\n                      <h3>$").concat(total || products[i].price, "</h3>\n                    </div>\n                    <hr class=\"modalHR\" />\n                    <div class=\"alert\">\n                      <div>\n                        <svg\n                          width=\"16\"\n                          height=\"16\"\n                          viewBox=\"0 0 16 16\"\n                          fill=\"none\"\n                          xmlns=\"http://www.w3.org/2000/svg\">\n                          <g clip-path=\"url(#clip0_268_12877)\">\n                            <path\n                              d=\"M8 7.66663V11\"\n                              stroke=\"#403F3D\"\n                              stroke-linecap=\"round\"\n                              stroke-linejoin=\"round\" />\n                            <path\n                              d=\"M8 5.00667L8.00667 4.99926\"\n                              stroke=\"#403F3D\"\n                              stroke-linecap=\"round\"\n                              stroke-linejoin=\"round\" />\n                            <path\n                              d=\"M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z\"\n                              stroke=\"#403F3D\"\n                              stroke-linecap=\"round\"\n                              stroke-linejoin=\"round\" />\n                          </g>\n                          <defs>\n                            <clipPath id=\"clip0_268_12877\">\n                              <rect width=\"16\" height=\"16\" fill=\"white\" />\n                            </clipPath>\n                          </defs>\n                        </svg>\n                      </div>\n                      <p class=\"alertP caption\">\n                        The cost is not final. Download our mobile app to see the\n                        final price and place your order. Earn loyalty points and\n                        enjoy your favorite coffee with up to 20% discount.\n                      </p>\n                    </div> \n                <button class=\"modalClose button\" onclick=\"closeModal()\">Close</button>\n            </div>\n        </div>\n    </dialog>");
}
function closeModal() {
    var modal = document.querySelector(".modal");
    document.body.style.position = "";
    document.body.style.top = "";
    modal.close();
    modal.remove();
}
function openModal(x, imageIndex, i) {
    createModal(x, imageIndex, i);
    document.body.style.position = "fixed";
    document.body.style.top = "-".concat(window.scrollY, "px");
    var modal = document.querySelector(".modal");
    modal.showModal();
}
// script for the navigation modal
function openNavModal() {
    if (!navModal) {
        throw new Error("navModal failed to load");
    }
    navModal.classList.add("navModalFlex");
    document.body.style.position = "fixed";
    document.body.style.top = "-".concat(window.scrollY, "px");
    navModal.showModal();
}
function closeNavModal() {
    if (!navModal) {
        throw new Error("navModal failed to load");
    }
    navModal.classList.remove("navModalFlex");
    document.body.style.position = "";
    document.body.style.top = "";
    navModal.close();
}
