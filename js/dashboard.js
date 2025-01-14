
document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('order-list');
    fetch(endpoints.orders, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
    }).then(response => response.json()).then(orders => {
        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.innerHTML = `<p>Order ID: ${order.id}</p><p>Status: ${order.status}</p>`;
            orderList.appendChild(orderDiv);
        });
    }).catch(console.error);
});
            