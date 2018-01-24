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

function catAndMouse(x, y, z) {
    let _x = Math.abs(z-x);
    let _y = Math.abs(z-y);
    if(_x == _y)
        return 'Mouse C';
    else if(_x < _y)
        return 'Cat A';
    else
        return 'Cat B';
    // Complete this function
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var result = catAndMouse(x, y, z);
        console.log(result);


    }

}
