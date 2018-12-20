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

function getNearbyStation(n,c) {
    let m = c.length;
    let res = -1;
    for(let i=0;i<m;i++) {
        let t = Math.abs(n - c[i])
        if(t < res || res === -1)
            res = t;
    }
    return res;
}
// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    let max = 0;
    for(let i=0;i<n;i++) {
        let t = getNearbyStation(i, c);
        if(t > max)
            max = t
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}

