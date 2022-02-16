const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `${textIn}. This is what we know about the avocado.`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File Written");
