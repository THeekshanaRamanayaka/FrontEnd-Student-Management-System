const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

function register() {
    window.location.href = "register.html";
}

function login() {
    window.location.href = "signIn.html";
}