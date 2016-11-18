//balanced-brackets
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
    var obj ={')':'(','}':'{',']':'['};
    for(var a0 = 0; a0 < t; a0++){
        var s = readLine();
        var count = 0;
        var extra = [];
        for(var i=0;i<s.length;i++){
            if(s[i] == '[' || s[i] == '{' || s[i] == '('){
                count++;
                extra.push(s[i]);
            }
            if(s[i] == ']' || s[i] == '}' || s[i] == ')'){
                count--;
                if(extra[extra.length-1] == obj[s[i]])
                    extra.pop();
            }
        }
        if(!count && extra.length == 0)
            console.log("YES");
        else
            console.log("NO");
    }
}