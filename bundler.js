const fs = require("fs");
const parser = require("@babel/parser");

const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename,"utf-8");
    console.log(content);
    console.log(parser.parse(content));
}

moduleAnalyser("./src/index.js")