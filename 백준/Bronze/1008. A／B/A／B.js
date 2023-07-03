const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
let A = parseInt(inputData[0]);
let B = parseInt(inputData[1]);
console.log (A / B);