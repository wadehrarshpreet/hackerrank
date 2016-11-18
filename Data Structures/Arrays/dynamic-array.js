//dynamic-array
function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var n = parseInt(input[0].split(' ')[0]);
    var lastAns = 0;
    var arr = [];
    for(m=1;m<input.length;m++){
        var op = parseInt(input[m].split(' ')[0]);
        var x = parseInt(input[m].split(' ')[1]);
        var y = parseInt(input[m].split(' ')[2]);
        var seq = (x^lastAns)%n;
        if(arr[seq] == undefined)
            arr[seq]=[];
        if(op == 1){
            arr[seq].push(y);
        }
        else{
            var index = y%arr[seq].length;
            lastAns = arr[seq][index];
            console.log(lastAns);
        }
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
