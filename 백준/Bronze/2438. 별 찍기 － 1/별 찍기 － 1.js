const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();
const N = Number(inputData);
let answer = '';
for (let i = 0; i < N; i++) {
    answer += '*'
    console.log (answer);
}