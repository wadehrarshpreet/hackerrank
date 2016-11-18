//maximum-element
function processData(input) {
    var input = input.split('\n');
    var stack = [];
    for(m=1;m<input.length;m++){
        var op = parseInt(input[m].split(' ')[0]);
        if(op == 1){
            stack.push(parseInt(input[m].split(' ')[1]));
        }
        else if(op == 2){
            stack.pop();
        }
        else{
            console.log(Math.max.apply(null,stack));
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
