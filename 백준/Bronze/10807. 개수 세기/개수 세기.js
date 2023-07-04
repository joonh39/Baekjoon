const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].trim().split(' ');
const v = Number(input[2]);
let answer = 0;
for (let i = 0; i < N; i++) {
    if (v == arr[i]) {
        answer += 1;
    }
}
console.log (answer);