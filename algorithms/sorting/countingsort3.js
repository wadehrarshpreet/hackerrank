//countingsort3
function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var obj={};
    for(m=1;m<input.length;m++){
        var l = parseInt(input[m].split(" ")[0]);
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    var out = "";
    for(i=0;i<100;i++){
        if(obj[i]==undefined)
            obj[i]=0;
        m = obj[i-1];
        if(m==undefined)
            m=0;
        out+=(m+obj[i])+" ";
        obj[i] = m+obj[i];
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
