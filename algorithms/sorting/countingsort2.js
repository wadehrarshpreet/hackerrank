//countingsort2
function processData(input) {
    var arr = input.split("\n")[1];
    var str = arr.split(' ').map(Number);
    var obj={}
    for(x = 0, length = str.length; x < length; x++) {
        var l = str[x];
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    var out = "";
    var n = parseInt(input.split("\n")[0]);
    for(var i=0;n>0;i++){
        while(obj[i]>0){
            out+=i+" ";
            n--;
            obj[i]--;
        }
    }
    console.log(out);
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
