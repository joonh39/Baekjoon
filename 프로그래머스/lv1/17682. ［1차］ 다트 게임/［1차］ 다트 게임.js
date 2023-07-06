function solution(dartResult) {
    // 1D2S#10S
    const dart = [];
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
            dart.push(dartResult[i] + dartResult[i + 1]);
            i++;
        } else {
            dart.push(dartResult[i]);
        }
    } // dart = ['1','D','2','S','#','10','S']
    
    const sdt = [];
    for (let i = 0; i < dart.length; i++) {
        if (dart[i] == 'S') {
            sdt.push(dart[i - 1] ** 1);
        } else if (dart[i] == 'D') {
            sdt.push(dart[i - 1] ** 2);
        } else if (dart[i] == 'T') {
            sdt.push(dart[i - 1] ** 3);
        } else if (dart[i] == '*' || dart[i] == '#') {
            sdt.push(dart[i]);
        }
    } // sdt = [ 1, 2, '#', 10 ]
    
    let star = [];
    for (let i = 0; i < sdt.length; i++) {
        if (sdt[i] == '*') {
            if (i == 1) {
                sdt[0] = sdt[0] * 2;
                sdt.splice(i,1);
            }
        }
        if (sdt[i] == '#') {
            sdt[i - 1] = sdt[i - 1] * (-1);
            sdt.splice(i,1);
        }
        if (sdt[i] == '*') {
            sdt[i - 1] = sdt[i - 1] * 2;
            sdt[i - 2] = sdt[i - 2] * 2;
            sdt.splice(i,1);
        }
    } // [ 1, -2, 10 ]
    
    let answer = 0;
    for (let i = 0; i < sdt.length; i++) {
        answer += sdt[i];
    }

    return answer;
}