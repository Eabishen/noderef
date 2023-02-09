const { readFile, writeFile } = require("fs");

readFile("./test/firsttxt.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;

  readFile("./test/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./test/result-async.txt",
      `This is async result: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with task");
      }
    );
  });
});
console.log("starting with next task");
