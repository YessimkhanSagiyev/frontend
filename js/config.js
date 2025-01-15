const getConfig = () => {
    return {
        API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:5000',
        ADMIN_API_BASE_URL: process.env.ADMIN_API_BASE_URL || 'http://localhost:5001',
        USE_MOCK_API: process.env.USE_MOCK_API === 'true' || false,
    };
};


const config = getConfig();

const endpoints = {
    products: `${config.API_BASE_URL}/api/products`,
    registerUser: `${config.API_BASE_URL}/api/users/register`,
    loginUser: `${config.API_BASE_URL}/api/users/login`,
    orders: `${config.API_BASE_URL}/api/orders`,
    adminProducts: `${config.ADMIN_API_BASE_URL}/api/products`,
    adminUsers: `${config.ADMIN_API_BASE_URL}/api/users`,
    adminOrders: `${config.ADMIN_API_BASE_URL}/api/orders`,
};


export { config, endpoints };   