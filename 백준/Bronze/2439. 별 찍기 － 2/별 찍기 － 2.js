const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();
const N = Number(inputData);
for (let i = 0; i < N; i++) {
    let answer = '';
    for (let j = N - 1; j >= 0; j--) {
        answer += j <= i ? '*' : ' ';
    }
    console.log (answer);
}