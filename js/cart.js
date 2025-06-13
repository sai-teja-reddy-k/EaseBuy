const cartItems = [
  { name: "Smart Watch", price: 2499, quantity: 1, image: "images/watch.jpg" },
  { name: "Backpack", price: 1799, quantity: 2, image: "images/bag.jpg" }
];

function renderCart() {
  const container = document.getElementById("cartItems");
  let subtotal = 0;

  container.innerHTML = "";

  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const div = document.createElement("div");
    div.classList.add("cart-card");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>₹${item.price} × ${item.quantity}</p>
        <div class="quantity-controls">
          <button onclick="changeQty(${index}, -1)">➖</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty(${index}, 1)">➕</button>
          <button onclick="removeItem(${index})" class="remove-btn">🗑️ Remove</button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("total").innerText = subtotal + 50;
}

function changeQty(index, delta) {
  cartItems[index].quantity += delta;
  if (cartItems[index].quantity < 1) cartItems[index].quantity = 1;
  renderCart();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);
