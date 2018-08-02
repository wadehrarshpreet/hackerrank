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

let numbers = "0123456789";
let lower_case = "abcdefghijklmnopqrstuvwxyz";
let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let special_characters = "!@#$%^&*()-+";
/////////////// ignore above this line ////////////////////

function minimumNumber(n, password) {
    let s_n = false;
    let s_l = false;
    let s_u = false;
    let s_c = false;
    for(let i=0;i<password.length; i++) {
        if(numbers.indexOf(password[i]) !== -1)
            s_n = true;
        if(lower_case.indexOf(password[i]) !== -1)
            s_l = true;
        if(upper_case.indexOf(password[i]) !== -1)
            s_u = true;
        if(special_characters.indexOf(password[i]) !== -1)
            s_c = true;
    }
    return 4 - (s_n + s_l + s_u + s_c);
    // Return the minimum number of characters to make the password strong
}

function main() {
    var n = parseInt(readLine());
    var password = readLine();
    var answer = minimumNumber(n, password);
    if(answer + n < 6) {
        answer = 6 - n;
    }
    process.stdout.write("" + answer + "\n");

}
