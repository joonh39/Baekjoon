const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [A, B, C] = [Number(input[0]), Number(input[1]), Number(input[2])];
console.log (A + B + C);