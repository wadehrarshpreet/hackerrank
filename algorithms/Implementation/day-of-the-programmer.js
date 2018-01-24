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

function checkLeapYear(year) {
    if(year < 1919) {
        return year % 4 === 0;
    }
    else {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
}

function solve(year){
    //find Georgian calendar date then convert to julian
    // Complete this function
    const isLeapYear = checkLeapYear(year);
    let nDate = 13;
    let nMonth = 09;
    let nYear = year;
    if(isLeapYear)
        nDate--;
    if(year == 1918)
        nDate+=13;
    return `${('0'+nDate).slice(-2)}.${('0'+nMonth).slice(-2)}.${nYear}`
}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}
