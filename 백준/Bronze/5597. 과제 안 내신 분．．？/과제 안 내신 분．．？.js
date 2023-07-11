const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let answer = [];
for (let i = 1; i <= 30; i++) {
    if (input.includes(i)) {
        continue;
    } else {
        answer.push(i);
    }
}
answer.sort((a, b) => a - b);
console.log(`${answer[0]}\n${answer[1]}`);