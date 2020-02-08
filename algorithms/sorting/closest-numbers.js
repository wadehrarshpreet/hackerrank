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

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    let answers = [];
    let min = -1;
    for(let i=1;i<sortedArr.length; i++) {
        let diff = sortedArr[i] - sortedArr[i - 1];
        if(min === -1 || diff <= min) {
            if(diff < min) {
                answers = [];
            }
            min = diff;
            answers.push(sortedArr[i - 1], sortedArr[i]);
        }
    }
    return answers;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}

