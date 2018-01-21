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
function isValidate(temp) {
    for(let m=0;m<temp.length;m++)
        if(temp[m] == temp[m+1])
            return false;
    return true;
}
function maxLen(n, s){
    // Complete this function
    let uniq=[]
    const str=s;
    for(i=0;i<str.length;i++)
    {
     if(uniq.indexOf(str[i]) == -1){
        uniq.push(str[i]);
     }
    }
    let max = 0;
    for(j=0;j<uniq.length;j++){
      for(k=j+1;k<uniq.length;k++){
        temp = str;
       for(l=0;l<uniq.length;l++){
            if(l != j && l != k){
                temp = temp.replace(new RegExp(uniq[l],'gi'),"");
            }
        }
        if(isValidate(temp)){
            if(max < temp.length)
                max = temp.length;
        }
      }
    }
    return max;
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = maxLen(n, s);
    process.stdout.write(""+result+"\n");

}
