
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    fetch(endpoints.products).then(response => response.json()).then(products => {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>$${product.price}</p>`;
            productList.appendChild(card);
        });
    }).catch(console.error);
});
            