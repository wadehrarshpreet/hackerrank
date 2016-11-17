//two-strings
function processData(input) {
    var flag;
    input = input.split("\n");
    for(m=1;m<input.length;m+=2){
        flag = false;
        var str= input[m];
        var str2 = input[m+1];
        var obj={}
        for(x = 0, length = str.length; x < length; x++) {
            var l = str.charAt(x)
            obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
        }
        for(i=0;i<str2.length;i++){
            if(obj[str2[i]]!=undefined){
                flag=true;
                break;
            }
        }
        if(flag)
            console.log("YES");
        else
            console.log("NO");
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
