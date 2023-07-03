const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = Number(inputData[0]);
for (let i = 1; i <= T; i++) {
    let tCase = inputData[i].split(' ');
    let [A, B] = [Number(tCase[0]), Number(tCase[1])];
    console.log (`Case #${i}: ${A + B}`);
}