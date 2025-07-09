 //  Load from localStorage or start empty
let students = JSON.parse(localStorage.getItem("students")) || [];

let currentPage = 1;
const rowsPerPage = 4;

//  Render Table with Pagination
function renderTable() {
  const tbody = document.getElementById("studentTableBody");
  const pageInfo = document.getElementById("pageInfo");
  tbody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedStudents = students.slice(start, end);

  paginatedStudents.forEach((student, index) => {
    const row = `<tr>
      <td data-label="Serial #">${start + index + 1}</td>
      <td data-label="Username">${student.username}</td>
      <td data-label="Email">${student.email}</td>
      <td data-label="CNIC">${student.cnic}</td>
      <td data-label="Password">${student.password}</td>
      <td data-label="Gender">${student.gender}</td>
      <td data-label="Date/Time">${student.date}</td>
      <td data-label="Update">
        <button class="update-btn" onclick="updateStudent(${start + index})">Update</button>
      </td>
      <td data-label="Delete">
        <button class="delete-btn" onclick="deleteStudent(${start + index})">Delete</button>
      </td>
    </tr>`;
    tbody.innerHTML += row;
  });

  const totalPages = Math.ceil(students.length / rowsPerPage);
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  // Save to localStorage
  localStorage.setItem("students", JSON.stringify(students));
}

//  Add Student
function addStudent() {
  const name = prompt("Enter username:");
  const email = prompt("Enter email:");
  const cnic = prompt("Enter CNIC:");
  const password = prompt("Enter password:");
  const gender = prompt("Enter gender (Male/Female):");
  const date = prompt("Enter date (e.g. 25-05-2025):");

  if (
    name?.trim() && email?.trim() && cnic?.trim() &&
    password?.trim() && gender?.trim() && date?.trim()
  ) {
    students.unshift({
      username: name.trim(),
      email: email.trim(),
      cnic: cnic.trim(),
      password: password.trim(),
      gender: gender.trim(),
      date: date.trim()
    });
    currentPage = Math.ceil(students.length / rowsPerPage); // jump to last page
    renderTable();
  } else {
    alert("All fields are required!");
  }
}

//  Delete Student
function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    const totalPages = Math.ceil(students.length / rowsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    renderTable();
  }
}

//  Update Student
function updateStudent(index) {
  const student = students[index];
  const name = prompt("Edit username:", student.username);
  const email = prompt("Edit email:", student.email);
  const cnic = prompt("Edit CNIC:", student.cnic);
  const password = prompt("Edit password:", student.password);
  const gender = prompt("Edit gender:", student.gender);
  const date = prompt("Edit date:", student.date);

  if (
    name?.trim() && email?.trim() && cnic?.trim() &&
    password?.trim() && gender?.trim() && date?.trim()
  ) {
    students[index] = {
      username: name.trim(),
      email: email.trim(),
      cnic: cnic.trim(),
      password: password.trim(),
      gender: gender.trim(),
      date: date.trim()
    };
    renderTable();
  } else {
    alert("All fields are required!");
  }
}

// Pagination buttons
function nextPage() {
  const totalPages = Math.ceil(students.length / rowsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

// Initial render
renderTable();