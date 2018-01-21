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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let min = -1, max = 0;
    for(var i=0; i<5; i++){
        let _temp = 0;
        for(var j=0;j<5;j++){
            if(j==i) continue;
            _temp+=arr[j];
        }
        if(_temp < min || min == -1)
            min = _temp;
        if(_temp > max)
            max = _temp;
    }
    console.log(`${min} ${max}`)
}
