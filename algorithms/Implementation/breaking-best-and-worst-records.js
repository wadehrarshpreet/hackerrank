process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function breakingRecords(score) {
    // Complete this function
    var lCount = 0, hCount = 0;
    let sCount = score.length;
    let max = score[0];
    let min = score[0];
    for(var i=1;i<sCount; i++) {
        if(score[i] > max)
        {
            hCount++;
            max = score[i];
        }
        else if (score[i] < min) {
            lCount++;
            min = score[i];
        }

    }
    return [hCount, lCount];
}

function main() {
    var n = parseInt(readLine());
    score = readLine().split(' ');
    score = score.map(Number);
    var result = breakingRecords(score);
    console.log(result.join(" "));
}
