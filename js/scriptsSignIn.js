document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Sign in successful!');
        window.location.href = "viewProfiles.html";
    } else {
        alert('Please fill out both fields.');
    }
});
