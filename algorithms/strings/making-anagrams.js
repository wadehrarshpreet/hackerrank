//making-anagrams
function processData(input) {
    var str = input.split("\n")[0];
    var str2 = input.split("\n")[1];
    var obj={}
    for(x = 0, length = str.length; x < length; x++) {
        var l = str.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    var obj2={}
    for(x = 0, length = str2.length; x < length; x++) {
        var l = str2.charAt(x)
        obj2[l] = (isNaN(obj2[l]) ? 1 : obj2[l] + 1);
    }
    var count = 0;
    var keys = Object.keys(obj);
    var keys2 = Object.keys(obj2);
    for(i=0;i<keys.length;i++){
        if(obj2[keys[i]]==undefined)
            count+=obj[keys[i]];
        else if(obj2[keys[i]]!=obj[keys[i]])
            count+= Math.abs(obj2[keys[i]]-obj[keys[i]]);
    }
    for(i=0;i<keys2.length;i++){
        if(obj[keys2[i]]==undefined)
            count+=obj2[keys2[i]];
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
