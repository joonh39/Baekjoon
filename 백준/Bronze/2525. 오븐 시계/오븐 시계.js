const fs = require('fs');
const [currentTime, cook] = fs.readFileSync('/dev/stdin').toString().split('\n');
let time = currentTime.split(' ');
let H = Number(time[0]);
let M = Number(time[1]);
let finishM = M + Number(cook);

if (finishM >= 60) {
    H = H + parseInt(finishM / 60);
    finishM = finishM % 60;
}
if (H >= 24) {
    H -= 24;
}
console.log (`${H} ${finishM}`);