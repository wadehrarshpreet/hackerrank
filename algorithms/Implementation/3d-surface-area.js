'use strict';

const fs = require('fs');

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

// Complete the surfaceArea function below.
function surfaceArea(A, n, m) {
    let ans = 0;
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            let a = parseInt(A[i][j]);
            let up = A[i-1]?A[i-1][j]:0;
            let down = A[i+1]?A[i+1][j]:0;
            let left = A[i][j-1] || 0;
            let right = A[i][j+1] || 0;
            let _up = (a - up)>0?a - up:0;
            let _down = (a - down)>0?a - down:0;
            let _left = (a - left)>0?a - left:0;
            let _right = (a - right)>0?a - right:0;
            ans += 2 + (_up + _down + _left + _right);
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const HW = readLine().split(' ');

    const H = parseInt(HW[0], 10);

    const W = parseInt(HW[1], 10);

    let A = Array(H);

    for (let i = 0; i < H; i++) {
        A[i] = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));
    }

    let result = surfaceArea(A, H, W);

    ws.write(result + "\n");

    ws.end();
}

