const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let score = input[1].split(' ').map(Number);
score.sort((a, b) => (b - a));
let M = score[0];
let answer = 0;
for (let i = 0; i < N; i++) {
    answer += score[i] / M * 100
}
console.log(answer / N);