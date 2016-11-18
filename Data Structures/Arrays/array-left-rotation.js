//array-left-rotation
function processData(input) {
    input = input.split('\n');
    var leftRot = parseInt(input[0].split(' ')[1]);
    var arr = input[1].split(' ');
    for(i=0;i<leftRot;i++){
        arr.push(arr.shift());
    }
    console.log(arr.join(' '));
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
