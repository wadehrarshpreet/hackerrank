//picking-numbers

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

function pickingNumbers(a) {
    // Complete this function
    let aL = a.length;
    let max = 0;
    for(let i=0; i< aL; i++) {
        let _max = 0;
        let _bMax = 0;
        for(j=0; j< aL; j++) {
            if(Math.abs(a[i] - a[j]) <= 1) {
                if(a[i] < a[j])
                    _bMax++;
                else
                    _max++;
            }
        }
        if(_max > max)
            max = _max;
        if(_bMax > max)
            max = _bMax;
    }
    return max;
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = pickingNumbers(a);
    process.stdout.write("" + result + "\n");

}
