
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = { email: document.getElementById('email').value, password: document.getElementById('password').value };
    fetch(endpoints.loginUser, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then((result) => {
        localStorage.setItem('authToken', result.token);
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    }).catch(console.error);
});
            