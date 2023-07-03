const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const X = Number(inputData[0]);
const N = Number(inputData[1]);
let price = 0;
for (let i = 2; i < N + 2; i++) {
    const [a, b] = inputData[i].split(' ').map(Number);
    price += (a * b);
}
price === X ? console.log('Yes') : console.log('No');