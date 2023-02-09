const { readFileSync, writeFileSync } = require("fs");

console.log("Start");
const first = readFileSync("./test/firsttxt.txt", "utf8");
const second = readFileSync("./test/second.txt", "utf8");

writeFileSync(
  "./test/writesynce.txt",
  `Here is result of: ${first} and ${second}`,
  { flag: "a" }
);

console.log("Done with task");
console.log("Starting next task");
