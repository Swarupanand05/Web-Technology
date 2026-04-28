const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Spb@0609",
    database: "studentdb"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

app.post("/students", (req, res) => {
    const { name, age, course } = req.body;

    const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";
    
    db.query(sql, [name, age, course], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Student added successfully");
        }
    });
});


app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/students/:id", (req, res) => {
    const { name, age, course } = req.body;
    const { id } = req.params;

    const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";
    
    db.query(sql, [name, age, course, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Student updated successfully");
        }
    });
});

app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM students WHERE id=?", [id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Student deleted successfully");
        }
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
