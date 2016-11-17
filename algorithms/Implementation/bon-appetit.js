//bon-appetit
function processData(input) {
    //Enter your code here
    var input = input.split("\n");
    var n = input[0].split(" ")[0];
    var k = input[0].split(" ")[1];
    var a = input[1].split(" ");
    var given = parseFloat(input[2]);
    var total = 0;
    for(i=0;i<n;i++){
        if(i!=k)
        total+=parseFloat(a[i]);
    }
    if((total/2)==given){
        console.log("Bon Appetit");
    }
    else{
        console.log(given-(total/2));
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
