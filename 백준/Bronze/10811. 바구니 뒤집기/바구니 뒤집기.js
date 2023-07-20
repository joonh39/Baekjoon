const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ');
let s = [];
let e = [];
for (let i = 1; i <= M; i++) {
    s.push(input[i].split(' ').map(Number)[0]);
    e.push(input[i].split(' ').map(Number)[1]);
}
let answer = [];
for (let i = 1; i <= N; i++) {
    answer.push(i);
}
for (let i = 0; i < M; i++) {
    for (let j = s[i]; j < (e[i] + s[i]) / 2; j++) {
        let temp = [];
        let temp1 = [];
        temp = answer[j-1];
        temp1 = answer[s[i] + e [i] - j -1];
        answer[s[i] + e [i] - j -1] = temp;
        answer[j-1] = temp1;
    }
}
console.log(answer.join(' '));