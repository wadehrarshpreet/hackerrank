//largest-rectangle
function calcArea(arr,index){
    var height =arr[index]; 
    var base = 0;
    //forward
    for(i=index;i<arr.length;i++){
        if(arr[i]<height)
            break;
        base++;
    }    
    //backward
    for(i=index-1;i>=0;i--){
        if(arr[i]<height)
            break;
        base++;
    }
    return height*base;
}
function calcMin(arr,i){
    var orig = arr.slice();
    var ret = [];
    for(m=0;m<i;m++){
        arr.splice(arr.indexOf(Math.min.apply(null,arr)),1);
    }
    var min =Math.min.apply(null,arr);
    return [min,orig.indexOf(min)];
}

function processData(input) {
    //Enter your code here
    var input = input.split('\n');
    var arr = input[1].split(' ').map(Number);
    var max = 0;
    var i =0;
    while(i<arr.length){
        var index = calcMin(arr.slice(),i)[1];
        var area = calcArea(arr,index);
        if(area > max)
            max = area;
        i++;
    }
    console.log(max);    
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
