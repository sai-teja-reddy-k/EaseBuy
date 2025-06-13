const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: 2499,
    rating: 4.5,
    image: "images/watch.jpg"
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 1499,
    rating: 4.2,
    image: "images/headphones.jpg"
  },
  {
    id: 3,
    name: "Trekking Backpack",
    price: 1799,
    rating: 4.8,
    image: "images/bag.jpg"
  }
];

function loadProducts() {
  const grid = document.getElementById("productGrid");
  products.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h4>${prod.name}</h4>
      <p>₹${prod.price}</p>
      <p>⭐ ${prod.rating}</p>
      <button class="btn">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadProducts);
