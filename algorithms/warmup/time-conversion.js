//time-conversion
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
    var time = readLine();
    var _time = time.split(":");
    var hrs=(parseInt(_time[0]));
    var res=("0"+(hrs%12)).slice(-2)+":"+_time[1]+":"+_time[2].slice(0,2);
    if(_time[2].slice(-2) =="PM"){
        res=((hrs<12?12+hrs:12)).toString()+":"+_time[1]+":"+_time[2].slice(0,2);
    }
    console.log(res);

}
