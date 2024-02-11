const fs = require("fs");
console.log("First Line");

//Here we are reading file Synchronously

// let data = fs.readFileSync("F3.txt");
// console.log("File 1 Data  - > " + data);

// let data2 = fs.readFileSync("F9.txt");
// console.log("File 2 Data  - > " + data2);

//Now we understand about Asynchronous behaviour using callbacks

fs.readFile("F3.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("File 1 data - > " + data);
}

fs.readFile("F9.txt", cb2);

function cb2(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("File 2 data - > " + data);
}

fs.readFile("F12.txt", cb3);

function cb3(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("File 12 data - > " + data);
}

console.log("last Line");
