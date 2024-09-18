document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});

class Student {
    constructor(
        firstName, lastName, dateOfBirth, gender, nationality, email, mobileNumber, address, city, province, postalCode, country,
        guardiansName, guardiansPhoneNumber, guardiansEmail, signature, date)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.nationality = nationality;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.city = city;
        this.province = province;
        this.postalCode = postalCode;
        this.country = country;
        this.guardiansName = guardiansName;
        this.guardiansPhoneNumber = guardiansPhoneNumber;
        this.guardiansEmail = guardiansEmail;
        this.signature = signature;
        this.date = date;
    }
}

let formData;
var student;
let image;

function constructFromInputs() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var dateOfBirth = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var nationality = document.getElementById("nationality").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("state").value;
    var postalCode = document.getElementById("postal_code").value;
    var country = document.getElementById("country").value;
    var guardiansName = document.getElementById("parent_name").value;
    var guardiansPhoneNumber = document.getElementById("parent_phone").value;
    var guardiansEmail = document.getElementById("parent_email").value;
    var signature = document.getElementById("signature").value;
    var date = document.getElementById("date").value;

    student = new Student(
        firstName, lastName, dateOfBirth, gender, nationality, email, mobileNumber, address, city, province, postalCode, country,
        guardiansName, guardiansPhoneNumber, guardiansEmail, signature, date
    );

    formData = new FormData();
    image = document.getElementById("profile_picture");

    formData.append("firstName", student.firstName);
    formData.append("lastName", student.lastName);
    formData.append("dateOfBirth", student.dateOfBirth);
    formData.append("gender", student.gender);
    formData.append("nationality", student.nationality);
    formData.append("email", student.email);
    formData.append("mobileNumber", student.mobileNumber);
    formData.append("address", student.address);
    formData.append("city", student.city);
    formData.append("province", student.province);
    formData.append("postalCode", student.postalCode);
    formData.append("country", student.country);
    formData.append("guardiansName", student.guardiansName);
    formData.append("guardiansPhoneNumber", student.guardiansPhoneNumber);
    formData.append("guardiansEmail", student.guardiansEmail);
    formData.append("signature", student.signature);
    formData.append("date", student.date);
    formData.append("file", image.files[0]);
}

function submitForm() {
    constructFromInputs();

    var requestOptions = {
        method: "POST",
        body: formData,
    };

    fetch("http://localhost:8080/student", requestOptions)
    .then((response) => response.text())
    .then((result) => {
        console.log(result);
        alert("Register Successfully !");
    })
    .catch((error) => {
        console.log("error", error)
    });
}