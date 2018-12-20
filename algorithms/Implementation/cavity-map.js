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

function isCavity(i,j, grid) {
    let d = grid[i][j];
    if(d > grid[i-1][j] && d > grid[i+1][j] && d > grid[i][j-1] && d > grid[i][j+1])
        return true;
    return false;
}
function readLine() {
    return inputString[currentLine++];
}

// Complete the cavityMap function below.
function cavityMap(grid, n) {
    for(let i=1; i<n-1; i++) {
        for(let j=1; j<n-1; j++) {
            if(isCavity(i,j,grid)) {
                grid[i] = grid[i].substring(0,j) + 'X'+grid[i].substring(j+1)
            }
        }
    }
    return grid;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = cavityMap(grid, n);

    ws.write(result.join("\n") + "\n");

    ws.end();
}

