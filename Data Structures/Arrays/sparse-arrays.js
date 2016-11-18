//sparse-arrays
function processData(input) {
    input = input.split("\n");
    var n = parseInt(input[0]);
    var arr = input.slice(1,n+1);
    for(i=n+2;i<input.length;i++){
        var str = input[i];
        console.log(arr.filter(function(item){return item==str}).length);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
