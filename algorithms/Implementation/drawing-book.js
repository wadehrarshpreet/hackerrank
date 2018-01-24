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

function solve(n, p){
    let start = Math.floor(p/2);
    let end = Math.floor((n-p)/2)
    if(n%2 == 0)
       end = Math.ceil((n-p)/2)
    // Complete this function
    return start<end? start: end;
}

function main() {
    var n = parseInt(readLine());
    var p = parseInt(readLine());
    var result = solve(n, p);
    process.stdout.write(""+result+"\n");

}
