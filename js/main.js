import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";

async function getData() {
  const productsURL = await fetch("../js/data.json");
  const data = await productsURL.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
  searchFunc(data);
}

getData();
headerFunc();

const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
