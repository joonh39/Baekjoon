const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].trim().split(' ');
arr.sort((a, b) => (a - b));
const arrMin = arr[0];
arr.sort((a, b) => (b - a));
const arrMax = arr[0];
console.log (`${arrMin} ${arrMax}`);