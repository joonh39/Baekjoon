const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const A = Number(input[0]);
const B = input[1].split('').map(Number);
console.log (A * B[2]);
console.log (A * B[1]);
console.log (A * B[0]);
console.log ((A * B[2]) + (A * B[1] * 10) + (A * B[0] * 100));