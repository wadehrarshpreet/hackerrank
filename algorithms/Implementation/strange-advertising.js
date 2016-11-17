//strange-advertising
function processData(input) {
    //Enter your code here
    var ans = 2;
    var like = 2;
    for(i=1;i<parseInt(input);i++){
        like = Math.floor(like*1.5);
        ans+=like;
    }
    console.log(ans);
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
