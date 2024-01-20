let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  let result = "";
  cart.forEach((item) => {
    result += ` <tr class="cart-item">
    <td></td>
    <td class="cart-image">
      <img
        src="${item.img.singleImage}"
        alt=""
      />
      <i class="bi bi-x delete-cart" data-id = ${item.id}></i>
    </td>
    <td>${item.name}</td>
    <td>$${item.price.newPrice.toFixed(2)}</td>
    <td class="td">${item.quantity}</td>
    <td class="td">$${(item.price.newPrice * item.quantity).toFixed(2)}</td>
  </tr>`;
  });
  cartWrapper.innerHTML = result;
  removeCartItem();
}
displayCartProduct();

function removeCartItem() {
  let cartItems = document.querySelector(".header-cart-count");
  const btnDeleteCart = document.querySelectorAll(".delete-cart");
  btnDeleteCart.forEach((button) => {
    button.addEventListener("click", (e) => {
      cart = cart.filter((item) => item.id !== Number(e.target.dataset.id));
      displayCartProduct();
      localStorage.setItem("cart", JSON.stringify(cart));
      cartItems.innerHTML = cart.length;
      saveCartValues();
    });
  });
}

function saveCartValues() {
  const cartTotal = document.querySelector("#cart-total");
  const subTotal = document.querySelector("#sub-total");
  const fastCargo = document.querySelector("#fast-cargo");
  const fastCargoPrice = 15;

  let itemsTotal = 0;
  cart.length > 0 &&
    cart.map((item) => (itemsTotal += item.price.newPrice * item.quantity));
  subTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
  cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
  fastCargo.addEventListener("change", (e) => {
    e.target.checked == true
      ? (cartTotal.innerHTML = `${(itemsTotal + fastCargoPrice).toFixed(2)}`)
      : (cartTotal.innerHTML = `${itemsTotal.toFixed(2)}`);
  });
}
saveCartValues();
