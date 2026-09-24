const express = require("express");

const app = express();

const users = [
    { id: 1, name: "Ojaswi", email: "[EMAIL_ADDRESS]", password: "pass1" },
    { id: 2, name: "Abhi", email: "[EMAIL_ADDRESS]", password: "pass2" },
    { id: 3, name: "Ayushi", email: "[EMAIL_ADDRESS]", password: "pass3" },
    { id: 4, name: "Shubham", email: "[EMAIL_ADDRESS]", password: "pass4" },
    { id: 5, name: " Vinay", email: "[EMAIL_ADDRESS]", password: "pass5" }
]

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/", (req, res) => {
    res.send("<h1>Hello from Express</h1>");
})

app.get("/users", (req, res) => {
    res.json(users)
})
app.listen(3000, () => {
    console.log("Server started on port 3000");
})