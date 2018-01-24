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

function getMoneySpent(keyboards, drives, s){
    // Complete this function
    let max = -1;
    let totalKeyboard = keyboards.length;
    let totalDrives = drives.length;
    for(let i =0;i<totalKeyboard;i++) {
        for(let j=0;j<totalDrives;j++) {
            let _t = keyboards[i] + drives[j];
            if(_t > max && _t <= s)
                max = _t
        }
    }
    return max;
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var n = parseInt(s_temp[1]);
    var m = parseInt(s_temp[2]);
    keyboards = readLine().split(' ');
    keyboards = keyboards.map(Number);
    drives = readLine().split(' ');
    drives = drives.map(Number);
    //  The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    var moneySpent = getMoneySpent(keyboards, drives, s);
    process.stdout.write(""+moneySpent+"\n");

}
