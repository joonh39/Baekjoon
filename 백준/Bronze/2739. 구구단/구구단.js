const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();
let num = Number(inputData);
for (let i = 1; i <= 9; i++) {
    console.log (`${num} * ${i} = ${num * i}`);
}