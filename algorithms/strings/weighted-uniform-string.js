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
    let _possible = {};
    let last_char = '';
    let last_count = 0;
    for(let i=0;i<s.length;i++) {
        let _score = (s[i].charCodeAt() - 96);
        if(last_char == s[i]) {
            last_count += _score;
        } else {
            last_count = _score;
        }
        last_char = s[i];
        _possible[last_count] = 1;
    }
    for(var a0 = 0; a0 < n; a0++){
        var x = parseInt(readLine());
        if(_possible[x] == 1)
            console.log('Yes');
        else
            console.log('No');
        // your code goes here

    }

}
