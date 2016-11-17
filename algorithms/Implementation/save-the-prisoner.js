//save-the-prisoner
function processData(input) {
    //Enter your code here
    var input = input.split("\n");
    var t = parseInt(input[0]);
    for(v=1;v<=t;v++){
        var n = parseInt(input[v].split(" ")[0]);
        var m = parseInt(input[v].split(" ")[1]);
        var s = parseInt(input[v].split(" ")[2]);
        var ans = ((m+s-1)%(n));
        if(ans==0)
            console.log(n);
        else
            console.log(ans);
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
