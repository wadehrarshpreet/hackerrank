//the-love-letter-mystery
function isPal(str){
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function toChar(code){
    return String.fromCharCode(code);
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
function processData(input) {
    //Enter your code here
    input = input.split("\n");
    for(m=1;m<input.length;m++){
        var string = input[m].toLowerCase();
        var count = 0;
        var asc = 97;
        var i=0;
        while(!isPal(string))
        {
            if(string[i]!=string[string.length-1-i]){
                var startCount = string[i].charCodeAt();
                var endCount = string[string.length-1-i].charCodeAt();
                var small = (startCount>endCount?endCount:startCount);
                count +=parseInt(Math.abs(startCount-endCount));
                string = string.replaceAt(i, toChar(small));
                string = string.replaceAt(string.length-1-i, toChar(small));
            }
            i++;
        }
        console.log(count);
    }
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
