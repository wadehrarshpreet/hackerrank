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

function migratoryBirds(n, ar) {
    var obj = {};
    for(let i =0;i<n;i++){
        if(obj[ar[i]])
            obj[ar[i]]++;
        else
            obj[ar[i]] = 1;
    }
    let max = ar[0];
    Object.keys(obj).forEach(key => {
        if(obj[key] > obj[max])
            max = key;
    })
    return max;
    // Complete this function
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    process.stdout.write("" + result + "\n");

}
