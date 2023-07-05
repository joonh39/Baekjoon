function solution(n, arr1, arr2) {
    const answer1 = [];
    const answer2 = [];
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer1.push(arr1[i].toString(2).padStart(n, '0'));
        // [ '01001', '10100', '11100', '10010', '01011' ]
        answer2.push(arr2[i].toString(2).padStart(n, '0'));
        // [ '11110', '00001', '10101', '10001', '11100' ]
        
        let answerArr = '';
        for (let j = 0; j < n; j++) {
            if (answer1[i][j] != 0 || answer2[i][j] != 0) {
                answerArr += '#';
            } else {
                answerArr += ' ';
            }
        }
        answer.push(answerArr);
    }
    return answer;
}