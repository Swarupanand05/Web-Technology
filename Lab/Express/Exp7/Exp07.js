//Simple array of object
// var students = [
//     {
//         name: "John",
//         age: 20,
//         grade: "A"
//     },
//     {
//         name: "Jane",
//         age: 22,        
//         grade: "B"
//     },
//     {
//         name: "Doe",
//         age: 21,
//         grade: "C"
//     }
// ];
// //accessing object properties
// console.log(students[0].name); // John
// console.log(students[1].age); // 22
// console.log(students[2].grade); // C
// //looping through array of objects
// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name + " is " + students[i].age + " years old and has grade " + students[i].grade);
// }


// Create array of objects using Express

const express = require('express');   // Import express module
const app = express();                // Create express app
const port = 3000;                    // Server port

// Array of student objects
const students = [
    {
        id: 1,
        name: "Swarup",
        age: 20,
        email: "swarup@example.com",
        address: "Sangola"
    },
    {
        id: 2,
        name: "Om",
        age: 22,
        email: "om@example.com"
    },
    {
        id: 3,
        name: "Aditya",
        age: 21,
        email: "aditya@example.com"
    }
];

// Route to get all students
app.get('/Students', (req, res) => {
    res.json(students);   // Send students data in JSON format
});

//find user by id
app.get('/Students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);  // Get id from request parameters
    const student = students.find(s => s.id === studentId);  // Check if student exists
    if (student) {
        res.json(student);  // Send student data in JSON format
    } else {
        res.status(404).json({ message: "Student not found" });  // Send error message if student not found
    }
});


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});