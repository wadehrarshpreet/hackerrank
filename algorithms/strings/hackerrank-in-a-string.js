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
    var q = parseInt(readLine());
    let _s = ['h','a','c','k','e','r','r','a','n','k'];
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        let match = 0;
        for(let i =0;i<s.length;i++) {
            if(s[i] == _s[match]) {
                match++;
            }
        }
        if(match == 10)
            console.log('YES');
        else
            console.log('NO');
        // your code goes here
    }

}
