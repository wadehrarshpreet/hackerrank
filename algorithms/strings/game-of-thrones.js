//game-of-thrones
function processData(input) {
    var str = input;
    var obj={}
    for(x = 0, length = str.length; x < length; x++) {
        var l = str.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    var oneOdd = false;
    var keys = Object.keys(obj);
    for(i=0;i<keys.length;i++){
        if(obj[keys[i]]%2!=0){
            if(oneOdd){
                console.log("NO");
                return;
            }
            else
                oneOdd = true;
        }
    }
    console.log("YES");
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
