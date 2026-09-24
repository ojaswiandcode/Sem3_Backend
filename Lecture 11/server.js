const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // It is a middleware used to parse incoming JSON payloads in request bodies.

app.get("/", (req, res) => {
    // console.log("Request URL", req.url);
    // console.log("Request Method", req.method);
    // console.log("Request Headers", req.headers);
    res.send("Welcome to the Homepage");
})

app.post("/", (req, res) => {
    console.log("Request URL", req.url);
    console.log("Request Method", req.method);
    console.log("Request Headers", req.headers);
    console.log("Request Body", req.body);
    res.send("Hello from POST method");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
