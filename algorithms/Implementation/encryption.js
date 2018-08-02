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

// Complete the encryption function below.
function encryption(s) {
    let string = s.replace(/\s/gi,'');
    let length = string.length;
    let min = Math.floor(Math.sqrt(length));
    let max = Math.ceil(Math.sqrt(length));
    let row = min;
    let columns = min;
    if(min * min < length && min * max >= length) {
        row = min;
        columns = max;
    } else if(max * max >= length) {
        row = max;
        columns = max;
    }
    let answer = [];
    for(let i =0;i<row;i++) {
        let str = ''
        for(let j=0;j<columns;j++) {
            if(!string[(i*columns)+j]) continue;
            if(!answer[j]) answer[j] = ''
            answer[j] += string[(i*columns)+j];
        }
    }
    return answer.join(' ')
 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}

