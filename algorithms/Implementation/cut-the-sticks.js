//cut-the-sticks
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var arrLength = arr.length;
    for(;;){
        if(arr.length==0)
            break;
        var t = Math.min.apply(null,arr);//amount to cut
        var cut = 0;
        for(i=0;i<arr.length;i++){
            arr[i]=arr[i]-t;
            cut++;
            if(arr[i]<=0){
                arr.splice(i,1);
                i--;
            }
        }
        arrLength= arr.length;
        console.log(cut);
    }
}
