const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));
let maxNum = input[0];
let num = 0;
for (let i = 1; i < 9; i++) {
    if (maxNum < input[i]) {
        maxNum = input[i];
        num = i;
    }
}
console.log (maxNum);
console.log (num + 1);