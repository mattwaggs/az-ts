import shelljs from "shelljs";
import fs from "fs";

var args = process.argv.slice(2);
const filePath = args[0];

if (!fs.existsSync(filePath)) {
  throw new Error("File could not be found");
}

shelljs.exec(`ts-node ${filePath}`);
