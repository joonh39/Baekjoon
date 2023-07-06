const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ');
let answer = [];
for (let j = 0; j < N; j++) {
        answer[j] = j + 1;
}
for (let i = 1; i < input.length; i++) {
    let [s, e] = input[i].split(' ');
    [answer[s - 1], answer[e - 1]] = [answer[e - 1], answer[s - 1]];
}
console.log(answer.toString().split(',').join(' '));