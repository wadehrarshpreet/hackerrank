//countingsort4
function processData(input) {
    input = input.split("\n");
    var n = parseInt(input[0]);
    var arr = {};
    for(m=1;m<input.length;m++){
        var num = input[m].split(" ")[0];
        var str = ((m-1)<(n/2)?"-":input[m].split(" ")[1]);
        var obj= {num:num,str:str};
        if(arr[num]==undefined)
            arr[num]=[];
        arr[num].push(obj);
    }
    var keys = Object.keys(arr);
    var out = "";
    for(var i=0;i<keys.length;i++){
        var sub = arr[keys[i]];
        for(var j=0;j<sub.length;j++){
            out+=arr[keys[i]][j].str+" ";
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
