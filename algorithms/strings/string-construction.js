//string-construction
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
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n; a0++){
        var s = readLine();
        var p = [];
        for(i=0;i<s.length;i++){
            if(p.indexOf(s[i])==-1){
                p.push(s[i]);
            }
        }
        console.log(p.length);
    }

}
