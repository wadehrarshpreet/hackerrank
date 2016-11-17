//repeated-string
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
    var s = readLine();
    var n = parseInt(readLine());
    var oneCount = s.replace(/[^a]/g, "").length;
    var count = oneCount * Math.floor(n/(s.length));
    var left =n- s.length*Math.floor(n/(s.length));
    for(i=0;i<left;i++)
        if(s[i]=='a')
            count++;
    console.log(count);

}
