//bear-and-steady-gene
function valid(a,n) {
    var A,C,T,G;
    A = a['A'];
    G = a['G'];
    T = a['T'];
    C = a['C'];
    if (A <= n/4 && G <= n/4 && T <= n/4 && C <= n/4) return true;
    return false;
}
function processData(input) {
    var n =parseInt(input.split("\n")[0]);
    var str = input.split("\n")[1];
    var obj={A:0,G:0,C:0,T:0}
    for(x = 0, length = str.length; x < length; x++) {
        var l = str.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    if(valid(obj,n)){
        console.log("0");
        return;
    }
    var count = 500000;
    var sCount = 0;
    for (i=0 ; i<str.length ; i++) {
        obj[str[i]]--;
        while(valid(obj,n) && sCount <= i) {
            count = Math.min(count,i-sCount+1);
            obj[str[sCount]]++;
            sCount++;
        }
    }
    console.log(count);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
