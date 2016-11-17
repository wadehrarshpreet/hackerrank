//happy-ladybugs
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
    var Q = parseInt(readLine());
    for(var a0 = 0; a0 < Q; a0++){
        var n = parseInt(readLine());
        var b = readLine();
        var ans = "NO";
        var obj={}
        var repeats=[];
        for(x = 0, length = b.length; x < length; x++) {
            var l = b.charAt(x);
            obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
        }
        var empty = obj["_"] || 0;
        if(empty == 0 && b.split("").sort().join("") != b)
        {
            ans = "NO";
            var flag=0;
            for(i=0;i<b.length-1;i++){
                if(b[i]==b[i+1]){
                    flag=1;
                }else if(flag == 1)
                    flag=0;
                else if(flag==0){
                    ans = "NO";
                    break;
                   }
            }
            if(flag)
                ans="YES";
            console.log(ans);
            continue;
        }
        for(i=0; i<Object.keys(obj).length;i++){
            if(Object.keys(obj)[i]=="_"){
                ans="YES";
                continue;
            }
            if(obj[Object.keys(obj)[i]]<=1)
            {
                ans = "NO"
                break;
            }
            else
                ans="YES"
        }
        
        console.log(ans);
        
    }
}
