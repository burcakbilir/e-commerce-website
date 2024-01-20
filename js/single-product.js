import colorsFunc from "./colors.js";
import tabsFunc from "./tabs.js";
import commentFunc from "./comment.js";

const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));
const productTitle = document.querySelector(".product-title");
const productNewPrice = document.querySelector(".new-price");
const productOldPrice = document.querySelector(".old-price");
productTitle.innerHTML = findProduct.name;
productNewPrice.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`;
productOldPrice.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`;

const singleImgDom = document.querySelector("#single-img");
const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";

findProduct.img.thumbs.forEach((image) => {
  result += `<li>
  
  <i class = "">
    <img
      src=${image}
      alt=""
      class="img-fluid"
    />
    </i>
  </li>`;
  galleryThumbs.innerHTML = result;
});

const galleryThumbsImages = document.querySelectorAll(".img-fluid");
galleryThumbsImages.forEach((thumbsImg) => {
  thumbsImg.addEventListener("click", (e) => {
    let selectedImg = e.target.src;
    singleImgDom.src = selectedImg;
  });
});

singleImgDom.src = findProduct.img.singleImage;

//! image zoom
const singleImageWrapper = document.querySelector(".single-image-wrapper");

singleImageWrapper.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  singleImgDom.style.transformOrigin = `${x}px ${y + 200}px`;
  singleImgDom.style.transform = "scale(2)";
});

singleImageWrapper.addEventListener("mouseleave", (e) => {
  singleImgDom.style.transformOrigin = `center`;
  singleImgDom.style.transform = "scale(1)";
});

//! single product add to cart
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const findCart = cart.find((item) => item.id === findProduct.id);
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
const cartItems = document.querySelector(".header-cart-count");

if (findCart) {
  btnAddToCart.setAttribute("disabled", "disabled");
} else {
  btnAddToCart.addEventListener("click", () => {
    cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
    btnAddToCart.setAttribute("disabled", "disabled");
    localStorage.setItem("cart", JSON.stringify(cart));
    cartItems.innerHTML = cart.length;
  });
}
