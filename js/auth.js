
document.addEventListener('DOMContentLoaded', () => {
    const auth0 = new auth0.WebAuth({
        domain: 'dev-ckeq33uk5gfe7lxz.us.auth0.com',
        clientID: 'y8pDUwxRmnBTWW4uCQ3A8BpS9rHoHnnQ',
        redirectUri: window.location.origin + '/dashboard.html',
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    document.getElementById('login-link')?.addEventListener('click', () => {
        auth0.authorize();
    });

    document.getElementById('logout-link')?.addEventListener('click', () => {
        localStorage.removeItem('id_token');
        window.location.href = 'index.html';
    });

    auth0.parseHash((err, authResult) => {
        if (authResult && authResult.idToken) {
            localStorage.setItem('id_token', authResult.idToken);
        } else if (err) {
            console.error(err);
        }
    });
});
            