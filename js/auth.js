// Refactored to remove unused variables and redundant logic
import { endpoints } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const auth0 = new auth0.WebAuth({
        domain: process.env.SECRET_AUTH_DOMAIN,
        clientID: process.env.SECRET_CLIENT_ID,
        redirectUri: `${window.location.origin}/dashboard.html`,
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    const loginLink = document.getElementById('login-link');
    if (loginLink) {
        loginLink.addEventListener('click', () => {
            auth0.authorize();
        });
    }

    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', () => {
            localStorage.removeItem('authToken');
            window.location.href = '/index.html';
        });
    }

    auth0.parseHash((err, authResult) => {
        if (authResult?.accessToken && authResult?.idToken) {
            localStorage.setItem('authToken', authResult.idToken);
            window.location.href = '/dashboard.html';
        } else if (err) {
            console.error('Error parsing authentication hash:', err);
        }
    });
});
