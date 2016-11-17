//alternating-characters
function processData(input) {
    //Enter your code here
    var inp = input.split("\n");
    var n = parseInt(inp[0]);
    for(m=1;m<inp.length;m++){
        var a = inp[m];
        var count = a.length - a.replace(/[^\w\s]|(.)(?=\1)/gi,"").length;
        /*for(i=1;i<a.length;i++){
            if(a[i-1]==a[i]){
                count++;
                a.splice(i,1);
                i--;
            }
        }*/
        console.log(count);
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
