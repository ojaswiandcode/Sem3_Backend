// const os = require('os');

// console.log(os.uptime());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.type());
// console.log(os.version());
// console.log(os.networkInterfaces());
// console.log(os.arch());
// console.log(os.EOL);


// const filePath=path.join("Back End Development","Lecture 5","core_modules.js");
// console.log(filePath);

//FS

//const fs = require('fs');
// console.log("A")
// // const data=fs.readFileSync("./sample.txt","utf-8");  //SYNCHRONOUS
// // console.log(data);
// fs.readFile("./sample.txt", "utf-8", (err, data) => {  //ASYNCHRONOUS
//     if (err) {
//         console.log(data);
//     } else {
//         console.log(data)
//     }
// });
// console.log("B")

// fs.writeFile("./sample.txt", "Hello", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Updated")
//     }
// })

//fs.appendFileSync("./sample.txt", "\nHow many nights do you wish someone would stay? \n Lie awake only hoping you're okay\n I never counted all of mine, \n If I tried I know it would feel like..\n Infinity");

//fs.unlinkSync("./sample1.txt");
//console.log("File Deleted")

// //Crypto Module
// const crypto = require("crypto");

// const password = "Infinity@1212"

// // const hash = crypto.createHash("SHA256").update(password).digest("hex")
// // console.log(hash)

// const salt = crypto.randomBytes(16).toString("hex");
// // console.log(salt)

// const hash = crypto.createHmac("sha256", salt).update(password).digest("hex")
// console.log(hash)

// DNS MODULE
const dns = require("dns");

dns.lookup("www.google.com", (err, address, family) => 
    if (err) {
    console.log(err.code);
} else {
    console.log(address);
    console.log(family)
}