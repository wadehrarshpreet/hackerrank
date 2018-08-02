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
// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
 
    let obj = {};
    let max = 0;
    for(let i=97,j=0;i<123;i++,j++) {
        obj[String.fromCharCode(i)] = h[j];
    }
    for(let i=0;i<word.length;i++) {
        if(obj[word[i]] > max)
            max = obj[word[i]];
    }
    return max * 1 * word.length;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    let result = designerPdfViewer(h, word);

    ws.write(result + "\n");

    ws.end();
}

