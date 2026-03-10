console.log("Hello from Node.js")

const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node.js');

console.log('Sync Changes')

console.log('Push changes');