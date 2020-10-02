#!/usr/bin/env node

var shelljs = require("shelljs");
var fs = require("fs");

var args = process.argv.slice(2);
var filePath = args[0];

if (!fs.existsSync(filePath)) {
  throw new Error("File could not be found");
}

shelljs.exec(`ts-node ${filePath}`);
