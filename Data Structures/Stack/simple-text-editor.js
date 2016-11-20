//simple-text-editor
function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var string = "";
    var lString = [""];
    for(m=1;m<input.length;m++){
        var op = parseInt(input[m].split(' ')[0]);
        if(op == 1){
            //append str
            var str = input[m].split(' ')[1];
            lString.push(string);
            string+=str;
        }
        else if(op == 2){
            //delete last kth character
            var k = parseInt(input[m].split(' ')[1]);
            lString.push(string);
            string = string.substr(0,string.length-k);
        }
        else if(op == 3){
            //print kth-1
            var k = parseInt(input[m].split(' ')[1]);
            console.log(string[k-1]);
        }
        else{
            //undo
            string = lString.pop();
        }
        
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
