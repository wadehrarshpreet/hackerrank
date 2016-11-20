//equal-stacks 
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
    var n1_temp = readLine().split(' ');
    var n1 = parseInt(n1_temp[0]);
    var n2 = parseInt(n1_temp[1]);
    var n3 = parseInt(n1_temp[2]);
    h1 = readLine().split(' ');
    h1 = h1.map(Number);
    h2 = readLine().split(' ');
    h2 = h2.map(Number);
    h3 = readLine().split(' ');
    h3 = h3.map(Number);
    var sum = [];
    sum[0] = h1.reduce(function(a,b){return a+b;},0);
    sum[1] = h2.reduce(function(a,b){return a+b;},0);
    sum[2] = h3.reduce(function(a,b){return a+b;},0);
    var i1 =0,i2=0,i3=0;
    while(!(sum[0] == sum[1] && sum[1] == sum[2])) {
        if( i1 < n1 && (sum[0] > sum[1] || sum[0] > sum[2]) ) {
            sum[0] -= h1[i1];
            i1++;
        }
        else if(i2 < n2 && (sum[1] > sum[0] || sum[1] > sum[2])) {
            sum[1] -= h2[i2];
            i2++;
        }
        else if(i3 < n3 && (sum[2] > sum[0] || sum[2] > sum[1]) ) {
            sum[2] -= h3[i3];
            i3++;
        }
    }
    console.log(sum[0]);
}
