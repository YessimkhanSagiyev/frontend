
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value
    };
    fetch(endpoints.registerUser, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(() => alert('Registration successful!')).catch(console.error);
});
            