console.log("\n=== Activity 7: Product Catalog Application ===");

// Product data
const products = [
    { id: 1, name: "Wireless Bluetooth Headphones", description: "High-quality noise-cancelling wireless headphones.", price: 199.99, category: "electronics", image: "https://picsum.photos/seed/headphones/300/200" },
    { id: 2, name: "Organic Cotton T-Shirt", description: "Comfortable 100% organic cotton t-shirt.", price: 29.99, category: "clothing", image: "https://picsum.photos/seed/tshirt/300/200" },
    { id: 3, name: "JavaScript Programming Guide", description: "Comprehensive guide to modern JavaScript.", price: 45.00, category: "books", image: "https://picsum.photos/seed/jsbook/300/200" },
    { id: 4, name: "Smart Home Security Camera", description: "WiFi-enabled camera with night vision.", price: 129.99, category: "electronics", image: "https://picsum.photos/seed/camera/300/200" },
    { id: 5, name: "Running Shoes", description: "Lightweight running shoes with advanced cushioning.", price: 89.99, category: "clothing", image: "https://picsum.photos/seed/shoes/300/200" }
];

// App state
let appState = { displayedProducts: [...products], filters: { search:'', category:'all' } };

// Create product card
function createProductCard(product){
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <span class="product-category">${product.category}</span>
        </div>
    `;
    return card;
}

// Display products
function displayProducts(list){
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    if(list.length===0){
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#666;">
            <h3>No products found</h3><p>Try adjusting your search or filters.</p>
        </div>`;
        updateResultsCount(0); return;
    }
    list.forEach(p=>grid.appendChild(createProductCard(p)));
    updateResultsCount(list.length);
}

// Update results count
function updateResultsCount(count){
    const total = products.length;
    const span = document.getElementById('resultsCount');
    span.textContent = count===total?`Showing all ${total} products`:`Showing ${count} of ${total} products`;
}

// Filters
function searchProducts(term){
    if(term.trim()==='') return products;
    term = term.toLowerCase();
    return products.filter(p=>p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
}
function filterByCategory(list,cat){ return cat==='all'?list:list.filter(p=>p.category===cat); }
function applyFilters(){
    let filtered = searchProducts(appState.filters.search);
    filtered = filterByCategory(filtered, appState.filters.category);
    appState.displayedProducts = filtered;
    displayProducts(filtered);
}

// Event handlers
function handleSearch(){ appState.filters.search = document.getElementById('searchInput').value; applyFilters(); }
function handleCategory(){ appState.filters.category = document.getElementById('categoryFilter').value; applyFilters(); }
function clearFilters(){
    document.getElementById('searchInput').value='';
    document.getElementById('categoryFilter').value='all';
    appState.filters = { search:'', category:'all' };
    applyFilters();
}

// Initialize app
function initializeApp(){
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('categoryFilter').addEventListener('change', handleCategory);
    document.getElementById('clearFiltersBtn').addEventListener('click', clearFilters);
    displayProducts(products);
    console.log("Product Catalog application initialized successfully!");
}

initializeApp();