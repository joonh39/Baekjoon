const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
const [a, b, c] = inputData.sort((a, b) => b - a);
let money = 0;
if (a == b && b == c) {
    money = 10000 + (a * 1000);
} else if ((a == b && b != c)||(a != b && b == c)) {
    money = 1000 + (b * 100);
} else {
    money = a * 100;
}
console.log (money);