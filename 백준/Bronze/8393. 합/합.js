const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();
const n = Number(inputData);
let answer = 0;
for (let i = 1; i <= n; i++) {
    answer += i 
}
console.log (answer);