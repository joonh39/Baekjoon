const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');
for (let i = 0; i < inputData.length - 1; i++) {
    let answer = 0;
    const num = inputData[i].split(' ');
    const [A, B] = [Number(num[0]), Number(num[1])];
    answer = A + B;
    console.log (answer);
}