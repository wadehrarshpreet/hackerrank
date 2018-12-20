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

// function isIntersect(d1, d2) {
    //     if (d1.x1 > d2.x2 || d2.x1 > d1.x2)
    //         return false;
    //     if(d1.y1 > d2.y2 || d2.y1 > d1.y2)
    //         return false;
    //     return true;
    // }
    function isIntersect(d1, d2) {
        let l = d2.points.length;
        for(let i=0;i<l;i++) {
            if(d1.points.indexOf(d2.points[i]) !== -1) {
                return true;
            }
        }
        return false;
    }

    function findMaxG(grid, i, j, direction) {
        let n = grid.length;
        let m = grid[0].length;
        let count = 1;
        switch (direction) {
            case 'up':
                {
                    let _i = i - 1;
                    while (_i >= 0 && grid[_i][j] === 'G') {
                        count++;
                        _i--;
                    }
                    return count;
                }
            case 'down':
                {
                    let _i = i + 1;
                    while (_i < n && grid[_i][j] === 'G') {
                        count++;
                        _i++;
                    }
                    return count;
                }
            case 'left':
                {
                    let _j = j - 1;
                    while (_j >= 0 && grid[i][_j] === 'G') {
                        count++;
                        _j--;
                    }
                    return count;
                }
            case 'right':
                {
                    let _j = j + 1;
                    while (_j < m && grid[i][_j] === 'G') {
                        count++;
                        _j++;
                    }
                    return count;
                }
            default:
                {
                    return count;
                }
        };
    }

    function getPlusesCount(done, grid, i, j) {
        let count = 1;

        let upCount = findMaxG(grid, i, j, 'up');
        // console.log(upCount);
        let downCount = findMaxG(grid, i, j, 'down');
        let leftCount = findMaxG(grid, i, j, 'left');
        let rightCount = findMaxG(grid, i, j, 'right');
        // return 1;
        count = Math.min(upCount, downCount, leftCount, rightCount);
        if(count > 1){
            let points = [`${i}-${j}`];
            for(let k=1;k<count;k++) {
                points.push(`${i+k}-${j}`)
                points.push(`${i-k}-${j}`)
                points.push(`${i}-${j+k}`)
                points.push(`${i}-${j-k}`)
            }
            console.log(points);
            done.push({
                i,j,
                area: (count -1)*4 + 1,
                count,
                points
            });
        }
        return done;
    }
    // Complete the twoPluses function below.
 function twoPluses(grid, row, column) {
        let pluses = [];
        let done = []
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (grid[i][j] === 'G') {
                    done = getPlusesCount(done, grid, i, j);
                }
            };
        };
        let max = 0;
        let length = done.length;
        if (length === 1)
            pluses.push(done[0].area, 1)
        else if (length === 0) {
            pluses.push(1, 1)
        } else
        for (let i = 0; i < length; i++) {
            let a1 = done[i].area;
            if(max < a1)
                max = a1;
            for (let j = 0; j < length; j++) {
                if (i === j) continue;
                if (!isIntersect(done[i], done[j])) {
                    let a2 = done[j].area;
                    pluses.push(a1 * a2);
                }
            }
        }
        if(length > 0 & pluses.length === 0) {
            pluses.push(1, max);
        }
        console.log(done);
        console.log(pluses);
        // let max1 = Math.max.apply(null, pluses);
        // pluses[pluses.indexOf(max1)] = -1;
        // let max2 = Math.max.apply(null, pluses);
        // return max1 * max2;
        return Math.max.apply(null, pluses);
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = twoPluses(grid, n, m);

    ws.write(result + "\n");

    ws.end();
}

