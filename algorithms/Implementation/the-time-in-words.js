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

const map = {
    0: 'o\' clock',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'tweleve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'half'
    
}

function inWord(num) {
    console.log('num', num);
    if (num === 15) return map[num]
    if (num <= 20)
        return map[num] + ' minute' + (num < 2 ? '' : 's');
    else
        return map[parseInt(num / 10) * 10] + ' ' + map[num % 10] + ' minutes';

}
// Complete the timeInWords function below.
function timeInWords(h, m) {
    if (m === 0) {
        return `${map[h]} ${map[m]}`
    } else if (m === 30) {
        return `${map[m]} past ${map[h]}`;
    } else if (m < 30) {
        return `${inWord(m)} past ${map[h]}`
    } else {
        return `${inWord(60 - m)} to ${map[h+1]}`
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}

