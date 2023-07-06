const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ');
let answer = [];
for (let j = 0; j < N; j++) {
        answer[j] = 0;
}
for (let i = 1; i < input.length; i++) {
    let [s, e, k] = input[i].split(' ');
    for (let j = 0; j < N; j++) {
        if (j >= s - 1 && j < e) {
            answer[j] = k;
        } else {
            answer[j] = answer[j];
        }
    }
}
console.log(answer.toString().split(',').join(' '));