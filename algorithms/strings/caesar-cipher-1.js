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
    var s = readLine();
    var k = parseInt(readLine());
    let str = '';
    var _t;
    let _code;
    for(var i=0;i<s.length;i++) {
        _code = s[i].charCodeAt();
        _t = _code + k;
        if((_code >= 65 && _code <= 90)) { //alphabet
            if(_t > 90){
                _t =((_t % 90) % 26) + 64;
            }
            if(_t == 64)
                _t = 90;
            str+=String.fromCharCode(_t)
        } else if(_code >= 97 && _code <= 122) {
            if(_t > 122){
                _t = ((_t % 122)%26) + 96;
            }
            if(_t == 96)
                _t = 122;
            str+=String.fromCharCode(_t)
        }
        else {
            str += s[i];
        }
    }
    console.log(str);

}
