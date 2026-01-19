const os = require("os");

console.log(os.cpus().length);
console.log(os.userInfo());
console.log(os.uptime() / 60 / 60);