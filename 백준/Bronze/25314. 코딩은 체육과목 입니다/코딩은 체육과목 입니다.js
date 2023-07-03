const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();
const N = Number(inputData);
let repeat = N / 4 ;
let answer = '';
const long = 'long';
for (let i = 1; i <= repeat; i++) {
    answer += long + ' ';
}
console.log (answer + 'int');