let cart = [];
let total = 0;

function addToCart(product, price){

  cart.push({product, price});

  total += price;

  updateCart();
}

function updateCart(){

  const cartItems = document.getElementById("cart-items");

  const totalElement = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach(item => {

    const div = document.createElement("div");

    div.classList.add("cart-item");

    div.innerText = `${item.product} - €${item.price}`;

    cartItems.appendChild(div);

  });

  totalElement.innerText = total.toFixed(2);

}
