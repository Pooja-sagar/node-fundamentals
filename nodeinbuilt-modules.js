// Page 3
// If I want to import the module from nodejs to my system then we will be using require() function as demonstrated in below example
const os = require('os');
const path = require('path');
console.log(`HostName : ${os.hostname()}`);
console.log(`Release : ${os.release()}`);
console.log(`HomeDirectory : ${os.homedir()}`);
console.log(`Path: ${path.join('Users', 'pooja', 'myfolder')}`);
