//gem-stones
function processData(input) {
    //Enter your code here
    var inp = input.split("\n");
    var n = inp.splice(0,1);
    var output = inp[0].split("");
    for(i=1;i<inp.length;i++){
        var a = output;
        var b = inp[i].split("");
        var output = a.filter(function(n) {
            return b.indexOf(n) != -1;
        });
    }
    var unique = output.filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
    console.log(unique.length);
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
