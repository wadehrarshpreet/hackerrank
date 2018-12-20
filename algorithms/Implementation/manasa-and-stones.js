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

// Complete the stones function below.
function stones(n, a, b) {
    let a1 = a;
    let b1 = b;
    if(a < b){
        a1 = a;
        b1 = b;
    }
    else {
        a1 = b;
        b1 = a;
    }
    let lower = (n-1) * a1;
    let upper = (n-1) * b1;
    
    let num = [lower]
    for(let i=lower; i<upper;) {
        let t = i + b1 - a1;
        if(num.indexOf(t) === -1){
            num.push(t);
            i = t;
        }
    }
    // num.push(upper);
    
    return num;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine(), 10);

        const a = parseInt(readLine(), 10);

        const b = parseInt(readLine(), 10);

        let result = stones(n, a, b);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}

