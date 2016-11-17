//funny-string
function processData(input) {
    //Enter your code here
    var inp= input.split("\n");
    var n = inp[0];
    inp.splice(0,1);
    input = inp;
    for(m=0;m<input.length;m++){
        var a = input[m];
        var ra = input[m].split("").reverse().join("");
        var flag = 0;
        for(i=0;i<a.length-1;i++)
        {
            
            if(Math.abs(a[i+1].charCodeAt(0)-a[i].charCodeAt(0))!=Math.abs(ra[i+1].charCodeAt(0)-ra[i].charCodeAt(0))) {
               flag = 0;
               break;
               }
               else
               flag =1;
        }
        if(flag == 1)
            console.log("Funny");
        else 
            console.log("Not Funny");
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
