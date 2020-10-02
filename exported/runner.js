#!/usr/bin/env node

var shelljs = require("shelljs");
var fs = require("fs");
var path = require("path");

var args = process.argv.slice(2);
var filePath = args[0];

if (!fs.existsSync(filePath)) {
  throw new Error("File could not be found");
}

var tsNodePath = path.join(__dirname, `./node_modules/ts-node/dist/bin.js`);
shelljs.exec(`${tsNodePath} ${filePath}`);
