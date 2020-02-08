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

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    const sLength = s.length;
    const tLength = t.length;
    let similar = 0;
    for (let i = 0; i < tLength; i++) {
        if (s[i] === t[i]) similar++;
        else break;
    }
    let minOperationToMatchCommonPartOfString = sLength - similar;
    let minOperationRequiredtoMatchTheString = tLength - similar;
    let operationLeft = k - minOperationToMatchCommonPartOfString;
    if (minOperationToMatchCommonPartOfString > k || minOperationRequiredtoMatchTheString > operationLeft)
        return 'No';
    
    if (similar === 0 && k > (sLength + tLength)) {
        return 'Yes'
    }
    operationLeft = operationLeft - minOperationRequiredtoMatchTheString;
    if (operationLeft % 2 === 0) return 'Yes';
    let numberOfCharacterCanDelete = parseInt(operationLeft / 2);
    if (numberOfCharacterCanDelete >= tLength) return 'Yes';
    return 'No';
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine(), 10);

    let result = appendAndDelete(s, t, k);

    ws.write(result + "\n");

    ws.end();
}

