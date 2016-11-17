//sock-merchant
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
    c = readLine().split(' ');
    c = c.map(Number);
    var obj={};
    c.map(function(ele){
        obj[ele] = ++obj[ele]||1;
    })
    var ans=0;
    for(i=0;i<Object.keys(obj).length;i++){
        ans+=Math.floor(obj[Object.keys(obj)[i]]/2);
    }
    console.log(ans);
}
