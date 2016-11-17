//strange-code
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
    var t = parseInt(readLine());
    var x = t/3;
    for(i=0;;){
        if(x<1){
            if(i-1<=0)
                i++;
            total=3*(Math.pow(2,i-1));
            min = total-2;
            console.log(total -t +min);
            break;
        }
        else{
            i++;
            x/=2;
        }
    }

}
