'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    if(p < 1 || q < p) {
        console.log('INVALID RANGE');
        return;
    }
    const answer = [];
    for(let i=p;i<=q;i++) {
        let sq = Math.pow(i, 2).toString();
        const breakingPosition = (sq.length / 2);
        let left = sq.substr(0, breakingPosition) || 0;
        let right = sq.substr(breakingPosition) || 0;
        if(parseInt(left) + parseInt(right) === i) {
            answer.push(i);
        }
    }
    if(answer.length === 0) {
        console.log('INVALID RANGE');
        return;
    }
    console.log(answer.join(' '));
    return;
}

function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}

