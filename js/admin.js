let usersA = JSON.parse(localStorage.getItem('users')) || [];
function addUser(name, contactNumber, email, address, password) {

    if (!name || !contactNumber || !email || !address || !password) {
        console.error("All fields are required");
        alert("All fields are required");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    const userExists = usersA.some(user => user.email === email);
    if (userExists) {
        alert("User with this email already exists");
        return false;
    }

    usersA.push({
        name: name,
        contactNumber: contactNumber,
        email: email,
        address: address,
        password: password
    });

    localStorage.setItem('users', JSON.stringify(usersA));

    return true;
}

if (usersA.length === 0) {
    addUser("Admin", "+94705288000", "Admin@gamil.com", "456 Main St, Colombo", "123");
}
console.log("Current users:", usersA);

function adminRegLetsGo() {
    let userDetails = {
        name: document.getElementById("regName").value.trim(),
        contactNumber: document.getElementById("regContactNumber").value.trim(),
        email: document.getElementById("regEmail").value.trim(),
        address: document.getElementById("regAddress").value.trim(),
        password: document.getElementById("regPassword").value
    };

    if (addUser(userDetails.name, userDetails.contactNumber, userDetails.email, userDetails.address, userDetails.password)) {
        document.getElementById("regName").value = "";
        document.getElementById("regContactNumber").value = "";
        document.getElementById("regEmail").value = "";
        document.getElementById("regAddress").value = "";
        document.getElementById("regPassword").value = "";

        alert("User registered successfully!");
        window.location.href = "../admin/placeOrderAdmin.html";
        //renderProductList('Burgers');
    } else {
        alert("Registration failed. Please check your inputs and try again.");
    }
}

function adminRegClear() {
    document.getElementById("regName").value = "";
    document.getElementById("regContactNumber").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regAddress").value = "";
    document.getElementById("regPassword").value = "";
}

function adminLoginLetsGo() {
    let name = document.getElementById("adminLogName").value.trim();
    let password = document.getElementById("adminLogPassword").value;
    let user = usersA.find(user => user.name === name && user.password === password);
    if (user) {
        window.location.href = "../admin/placeOrderAdmin.html";
        //renderProductList('Burgers');
    } else {
        alert("Invalid credentials. Please try again.");
    }
}