let currentStudentId = null;

// Sample student data
const students = {
    1: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+123456789',
        profileImage: 'https://via.placeholder.com/150/007bff/ffffff?text=JD'
    },
    2: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+987654321',
        profileImage: 'https://via.placeholder.com/150/6f42c1/ffffff?text=JS'
    }
};

// Function to select a student and display their profile
function selectStudent(row) {
    const studentId = row.getAttribute('data-id');
    currentStudentId = studentId;
    const student = students[studentId];

    // Update profile section with the student's details
    document.getElementById('profileName').textContent = student.name;
    document.getElementById('profileEmail').textContent = student.email;
    document.getElementById('profilePhone').textContent = student.phone;
    document.getElementById('profileImage').src = student.profileImage;

    // Enable Edit and Delete buttons
    document.getElementById('editButton').disabled = false;
    document.getElementById('deleteButton').disabled = false;
}

// Function to edit the profile
function editProfile() {
    const nameElement = document.getElementById('profileName');
    const emailElement = document.getElementById('profileEmail');
    const phoneElement = document.getElementById('profilePhone');

    // Replace text content with input fields for editing
    nameElement.innerHTML = `<input type="text" id="editName" value="${nameElement.textContent}">`;
    emailElement.innerHTML = `<input type="text" id="editEmail" value="${emailElement.textContent}">`;
    phoneElement.innerHTML = `<input type="text" id="editPhone" value="${phoneElement.textContent}">`;

    // Show the Save button and hide the Edit button
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('deleteButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'inline-block';
}

// Function to save the profile changes
function saveProfile() {
    const newName = document.getElementById('editName').value;
    const newEmail = document.getElementById('editEmail').value;
    const newPhone = document.getElementById('editPhone').value;

    // Update the student object with new values
    students[currentStudentId].name = newName;
    students[currentStudentId].email = newEmail;
    students[currentStudentId].phone = newPhone;

    // Update the table with new values
    const selectedRow = document.querySelector(`tr[data-id="${currentStudentId}"]`);
    selectedRow.cells[1].textContent = newName;
    selectedRow.cells[2].textContent = newEmail;
    selectedRow.cells[3].textContent = newPhone;

    // Restore profile view
    document.getElementById('profileName').textContent = newName;
    document.getElementById('profileEmail').textContent = newEmail;
    document.getElementById('profilePhone').textContent = newPhone;

    // Hide the Save button and show the Edit/Delete buttons
    document.getElementById('editButton').style.display = 'inline-block';
    document.getElementById('deleteButton').style.display = 'inline-block';
    document.getElementById('saveButton').style.display = 'none';
}

// Function to delete the student profile
function deleteProfile() {
    // Remove the student from the table
    const rowToDelete = document.querySelector(`tr[data-id="${currentStudentId}"]`);
    rowToDelete.remove();

    // Clear the profile section
    document.getElementById('profileName').textContent = 'Select a student';
    document.getElementById('profileEmail').textContent = '-';
    document.getElementById('profilePhone').textContent = '-';
    document.getElementById('profileImage').src = 'https://via.placeholder.com/150';

    // Disable Edit and Delete buttons
    document.getElementById('editButton').disabled = true;
    document.getElementById('deleteButton').disabled = true;

    // Remove the student from the object
    delete students[currentStudentId];
    currentStudentId = null;
}

// Function to filter the student table based on search input
function filterTable() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const tableRows = document.querySelectorAll('#studentsTable tbody tr');

    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const name = cells[1].textContent.toLowerCase();
        const email = cells[2].textContent.toLowerCase();
        const phone = cells[3].textContent.toLowerCase();

        if (name.includes(searchQuery) || email.includes(searchQuery) || phone.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Attach the filterTable function to the search box input event
document.getElementById('searchBox').addEventListener('input', filterTable);
