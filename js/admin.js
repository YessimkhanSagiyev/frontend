
document.addEventListener('DOMContentLoaded', () => {
    fetchAdminData();
});

function fetchAdminData() {
    fetchProducts();
    fetchUsers();
    fetchOrders();
}

function fetchProducts() {
    fetch(endpoints.adminProducts, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
    })
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-card';
            productItem.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>$${product.price}</p>`;
            productList.appendChild(productItem);
        });
    }).catch(console.error);
}

function fetchUsers() {
    fetch(endpoints.adminUsers, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
    })
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById('user-list');
        users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.className = 'user-card';
            userItem.innerHTML = `<p>${user.name}</p><p>${user.email}</p>`;
            userList.appendChild(userItem);
        });
    }).catch(console.error);
}

function fetchOrders() {
    fetch(endpoints.adminOrders, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
    })
    .then(response => response.json())
    .then(orders => {
        const orderList = document.getElementById('order-list');
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-card';
            orderItem.innerHTML = `<p>Order ID: ${order.id}</p><p>Status: ${order.status}</p>`;
            orderList.appendChild(orderItem);
        });
    }).catch(console.error);
}
            