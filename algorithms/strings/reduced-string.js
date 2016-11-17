function processData(input) {
    if(input.length==1)
        console.log(input);
    else{
        for(var i=1;i<input.length;i++){
            if(input[i]==input[i-1]){
                input = input.split("");
                input.splice(i-1,2);
                input = input.join("");
                i=0;
            }
        }
        if(input.length==0)
            console.log("Empty String");
        else
            console.log(input);
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
