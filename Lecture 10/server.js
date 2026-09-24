const express = require("express");
const app = express();
const PORT = 3000

app.use(express.json()); //MiddleWare

const students = [
    { rollNo: 1, name: "Akash Tanwar", section: "BCA_D" },
    { rollNo: 2, name: "Vanshika Roy", section: "BCA_D" },
    { rollNo: 3, name: "Muskanpreet Kaur", section: "BCA_D" },
    { rollNo: 4, name: "Ojaswi Pandey", section: "BCA_D" },
    { rollNo: 5, name: "Jaskirat Gambhir", section: "BCA_D" }
]

//READ OPERATION
app.get("/students", (req, res) => {
    res.json(students);
})

//READ OPERATION with ID
app.get("/students/:rollNo", (req, res) => {
    const rollNo = parseInt(req.params.rollNo);
    const student = students.find(s => s.rollNo === rollNo);
    if (!student) {
        res.status(404).json({ success: false, message: "Student not found" });
    }
    res.json(student);
})

//CREATE OPERATION
app.post("/students", (req, res) => {
    const data = req.body;
    students.push(RollNo);
    res.json({ success: true, message: "Student added successfully", data });
})

//UPDATE OPERATION
app.put("/students/:RollNo", (req, res) => {
    const id = req.params.RollNo;
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
})


