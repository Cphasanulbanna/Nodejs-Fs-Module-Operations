//MODULES
const { add, subtract, divide } = require("./utils");
const fs = require("fs");
const http = require("http");

console.log("result of addition:", add(10, 20));
console.log("result of subtraction:", subtract(100, 50));
console.log("result of division:", divide(10, 10));

//CREATING FILE USING open()
fs.open("newfile.txt", "w", (error, file) => {
    if (error) throw error;
    console.log("File created..!");
});

//ADDING CONTENT TO FILE USING append()
fs.appendFile(
    "newfile.txt",
    "This file is created using open() method and this paragraph is added using appendFile() method of 'fs' module",
    (error) => {
        if (error) throw error;
        console.log("File updated successfully");
    }
);

//READING FILE USING read()

http.createServer((req, res) => {
    fs.readFile("manuallyCreatedFile.html", (error, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
}).listen(8000);
