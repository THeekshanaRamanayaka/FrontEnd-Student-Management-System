function submitForm() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let dateOfBirth = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let nationality = document.getElementById("nationality").value;
    let email = document.getElementById("email").value;
    let mobileNumber = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("state").value;
    let postalCode = document.getElementById("postal_code").value;
    let country = document.getElementById("country").value;
    let profilePicture = document.getElementById("profile_picture").files[0];
    let guardiansName = document.getElementById("parent_name").value;
    let guardiansPhoneNumber = document.getElementById("parent_phone").value;
    let guardiansEmail = document.getElementById("parent_email").value;

    console.log("log in");

    if (!firstName || !lastName || !dateOfBirth || !gender || !nationality || !email || !mobileNumber || !address || !city || !province || !postalCode || !country || !profilePicture || !guardiansName || !guardiansPhoneNumber || !guardiansEmail) {
        alert("Please Fill Out all Fields !");
        return;
    } else {
        addStudent();
    }
}

function addStudent() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let dateOfBirth = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let nationality = document.getElementById("nationality").value;
    let email = document.getElementById("email").value;
    let mobileNumber = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("state").value;
    let postalCode = document.getElementById("postal_code").value;
    let country = document.getElementById("country").value;
    let profilePicture = document.getElementById("profile_picture").files[0];
    let guardiansName = document.getElementById("parent_name").value;
    let guardiansPhoneNumber = document.getElementById("parent_phone").value;
    let guardiansEmail = document.getElementById("parent_email").value;
    
    if (profilePicture && profilePicture.size >= 1000000) {
        alert("File too Large");
        document.getElementById("profile_picture").value = null;
        return;
    }
    const formData = new FormData();
    formData.append(
        "student",
        new Blob(
            [
                JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    dateOfBirth: dateOfBirth,
                    gender: gender ? gender.value : null,
                    nationality: nationality,
                    email: email,
                    mobileNumber: mobileNumber,
                    address: address,
                    city: city,
                    province: province,
                    postalCode: postalCode,
                    country: country,
                    guardiansName: guardiansName,
                    guardiansPhoneNumber: guardiansPhoneNumber,
                    guardiansEmail: guardiansEmail
                }),
            ],
            { type: "application/json" }
        )
    );
    formData.append("image", profilePicture);
    const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
    };
    console.log("Added !!");

    fetch("http://localhost:8800/student", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result);
        })
        .catch((error) => console.error("Error:", error));

    alert("Registration Successful !");
}

// const form = document.getElementById('registrationForm');
// form.addEventListener('submit', handleForm);
// function handleForm(event) {
//     event.preventDefault();
// }