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

// Complete the acmTeam function below.
function acmTeam(topic, n,m) {
    let max = 0;
    let count = {};
    for(let i=0;i<n;i++) {
        for(let j=i+1;j<n;j++) {
            let c = 0;
            for(let k=0;k<m;k++) {
                c += (parseInt(topic[i][k]) || parseInt(topic[j][k]))
            }
            if(!count[c]) count[c] = 0;
            count[c]++;
            if(c > max)
                max = c;
        }
    }
    return [max, count[max]];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    let result = acmTeam(topic, n, m);

    ws.write(result.join("\n") + "\n");

    ws.end();
}

