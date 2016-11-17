//mars-exploration
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

function main() {
    var S = readLine();
    var t = ['S','O','S'];
    var c=0;
    for(i=0;i<S.length;i++){
        if(S[i]!=t[i%3])
            c++;
    }
    console.log(c);
}
