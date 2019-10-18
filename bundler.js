const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");

const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename,"utf-8");
    console.log(content);
    const ast = parser.parse(content, {
        sourceType: "module"
    })
    console.log(ast);
}

moduleAnalyser("./src/index.js")