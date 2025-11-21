// Product data
const products = [
    { id: 1, name: "Floral Print Suit", price: "₹1,899", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Beautiful floral print suit with elegant design." },
    // [Include all 30 products from previous response]
];

// Display products
function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', displayProducts);