//beautiful-days-at-the-movies
function processData(input) {
    //Enter your code here
    var input = input.split(" ");
    var k = parseInt(input[2]);
    var count = 0;
    for(i=parseInt(input[0]);i<=parseInt(input[1]);i++){
        var rev = parseInt(i.toString().split("").reverse().join(""));
        var bb = Math.abs(i-rev)/k;
        if(Math.floor(bb)==bb)
            count++;
    }
    console.log(count);
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
