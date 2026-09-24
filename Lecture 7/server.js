const http = require("http");

const users = [
    { id: 1, name: "Ojaswi", email: "123@com", password: "pass1" },
    { id: 2, name: "Abhi", email: "456@com", password: "pass2" },
    { id: 3, name: "Ayushi", email: "789@com", password: "pass3" },
    { id: 4, name: "Shubham", email: "1011@com", password: "pass4" },
    { id: 5, name: " Vinay", email: "1213@com", password: "pass5" }
]

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();
    } else if (req.url == "/about" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    } else if (req.url == "/contact" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to Contact Page</h1>");
        res.end();
    } else if (req.url == "/users" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url = "/users" && req.method == "POST") {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                const user = JSON.parse(body);
                users.push(user);
                res.writeHead(201, { "Content-Type": "application/json" });
                res.write(JSON.stringify({ "success": true, "message": "User Created Successfully", "user": user }));
                res.end();
            });
        } catch (err) {
            console.log(err);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.write({
                success: false,
                message: err.message
            });
            res.end();
        }
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
    }
    // res.end("<h1>Your server has send this response</h1>")
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});