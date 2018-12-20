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
//999999
//121211
//99
//11

// Complete the gridSearch function below.
function gridSearch(G, P) {
    let gLength = G.length;
    let pLength = P.length;
    let matchCount = 0;
    for(let i=0;i<gLength;i++) {
        let l = G[i].length;//6
        let pL = P[0].length;//2
        for(let n=0; n<=l-pL;n++) {
            let j = G[i].substring(n,n+pL) == P[0]? n:-1;
            if(j !== -1) {
                let valid = true;
                for(let k=1;k<pLength;k++) {
                    if(G[(i+k)%gLength].substring(j, j+P[k].length) !== P[k]){
                        valid = false
                        break;
                    }
                }
                if(valid) {
                    return 'YES';
                }
            }    
        }
        
    }
    return 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);

        ws.write(result + "\n");
    }

    ws.end();
}

