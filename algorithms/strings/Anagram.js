function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = parseInt(input[0]);
    for(m=1;m<input.length;m++){
        var string = input[m];
        if(string.length%2 != 0){
            console.log(-1);
            continue;
        }
        var count = 0;
        var str1 = string.substr(0,parseInt(string.length/2));
        var str2 = string.substr(parseInt(string.length/2),string.length);
        str1 =str1.split("").sort().join("");
        str2 =str2.split("").sort().join("");
        var obj={}
        str=str1;
        for(x = 0, length = str.length; x < length; x++) {
            var l = str.charAt(x)
            obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
        }
        for(i=0;i<str2.length;i++)
        {
            if(obj[str2[i]] == undefined ||obj[str2[i]]<=0 ){
                count++;
            }
            else{
                obj[str2[i]]--;
            }
        }
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
