const products = [
  { id: 1, name: "Smart Watch", price: 2499, rating: 4.5, image: "images/watch.jpg" },
  { id: 2, name: "Bluetooth Headphones", price: 1499, rating: 4.2, image: "images/headphones.jpg" },
  { id: 3, name: "Backpack", price: 1799, rating: 4.8, image: "images/bag.jpg" },
  { id: 4, name: "Sneakers", price: 2199, rating: 4.4, image: "images/shoes.jpg" },
  { id: 5, name: "Fitness Band", price: 1299, rating: 4.3, image: "images/band.jpg" }
];

const list = document.getElementById('productList');
const searchBox = document.getElementById('searchBox');
const sortOptions = document.getElementById('sortOptions');

function displayProducts(filteredProducts = products) {
  list.innerHTML = "";
  filteredProducts.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h4>${prod.name}</h4>
      <p>₹${prod.price}</p>
      <p>⭐ ${prod.rating}</p>
      <button class="btn">Add to Cart</button>
    `;
    list.appendChild(card);
  });
}

function filterProducts() {
  const query = searchBox.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
}

function sortProducts() {
  let sorted = [...products];
  const sortBy = sortOptions.value;

  if (sortBy === "priceLow") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHigh") {
    sorted.sort((a, b) => b.price - a.price);
  }
  displayProducts(sorted);
}

searchBox.addEventListener("input", filterProducts);
sortOptions.addEventListener("change", sortProducts);

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
});
