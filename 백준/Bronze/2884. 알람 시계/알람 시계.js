const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
let H = Number(inputData[0]);
let M = Number(inputData[1]);
if (M >= 45) {
    M -= 45;
} else if (M < 45) {
    H -= 1;
    M = M + 60 - 45;
}
if (H < 0) {
    H = 23;
}
console.log (`${H} ${M}`);