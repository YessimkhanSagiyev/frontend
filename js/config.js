
const API_BASE_URL = 'http://localhost:5000';
const ADMIN_API_BASE_URL = 'http://localhost:5001';
const endpoints = {
    products: `${API_BASE_URL}/api/products`,
    registerUser: `${API_BASE_URL}/api/users/register`,
    loginUser: `${API_BASE_URL}/api/users/login`,
    orders: `${API_BASE_URL}/api/orders`,
    adminProducts: `${ADMIN_API_BASE_URL}/api/products`,
    adminUsers: `${ADMIN_API_BASE_URL}/api/users`,
    adminOrders: `${ADMIN_API_BASE_URL}/api/orders`
};
            