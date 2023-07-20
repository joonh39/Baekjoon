const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let str = input[0];
let num = Number(input[1]);
console.log(str[num-1]);