//poisonous-plants
function processData(input) {
    var arr = input.split('\n')[1].split(' ').map(Number);
    var dup = [];
    var k = 0;
    while (arr != dup) {
        dup = arr.slice();
        var remove = [];
        for (i = 1; i < arr.length; i++) {
            if (arr[i - 1] - arr[i]  < 0) {
                remove.push(i);
            }
        }
                
        var j =0;
        remove.map(function(ele) {
            arr.splice(ele-j, 1);
            j++;
        });
        
        if (arr.length == dup.length) break;
        k++;
    }
    console.log(k);
    //Enter your code here
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input += input;
});
process.stdin.on("end", function() {
    processData(_input);
});