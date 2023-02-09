const path = require("path");

console.log(path.sep);

const filepath = path.join("/test", "subfolder", "test.txt");

console.log(filepath);

// Only file name
const base = path.basename(filepath);

console.log(base);

const absolute = path.resolve(__dirname, "test", "subfolder", "test.txt");
console.log(absolute);
