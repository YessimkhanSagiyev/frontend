document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch(endpoints.products)
        .then(response => response.json())
        .then(products => {
            if (products.length === 0) {
                productList.innerHTML = '<p>No products available.</p>';
                return;
            }
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>${product.description}</p>
                    <button onclick="viewProductDetails(${product.id})">View Details</button>
                `;
                productList.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

function viewProductDetails(productId) {
    window.location.href = `product.html?id=${productId}`;
}
  