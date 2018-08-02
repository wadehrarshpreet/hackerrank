'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function addArrays(data) {
    let n = data.length;
    let m = data[n-1].length;
    let ans = [];
    let carry = 0;
    for(let j =m-1; j>= 0;j--) {
        let total = 0;
        for(let i=0; i<n; i++) {
            total += (data[i][j] || 0)
        }
        total+=carry;
        carry = parseInt(total/10);
        ans.unshift(total%10);

    }
    if(carry)
        ans.unshift(carry);
    return ans;
}
function multiply(num1, num2) {
    let m = num1;
    let n = num2;
    if(typeof m === 'number')
        m = num1.toString().split('')
    if(typeof n === 'number')
        n = num2.toString().split('')
    let carry = 0;
    let ans = [];
    for(let i=0; i< m.length;i++) {
        let temp = [];
        for(let k=0; k<i;k++)
            temp.push(0);
        for(let j=0; j<n.length;j++) {
            temp.push(m[i] * n[j]);
        };
        ans.push(temp);
    };
    ans = addArrays(ans);
    return ans;
}
// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let answer = [1];
    for(let i = 2; i<= n; i++) {
        answer = multiply(answer, i)
    };
    return answer.join("");
}

function main() {
    const n = parseInt(readLine(), 10);

    console.log(extraLongFactorials(n))
}

