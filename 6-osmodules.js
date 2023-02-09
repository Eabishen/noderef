const os = require("os");

// info about current user
const user = os.userInfo();

console.log(user);

// sys uptime

console.log(`Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freetMem: os.freemem(),
};

console.log(currentOs);
