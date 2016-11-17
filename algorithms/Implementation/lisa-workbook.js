//lisa-workbook
function processData (input) {
    var lines = input.split('\n');
    var arr = lines[0].split(/\s+/).map(i => parseInt(i));
    var n = arr[0];
    var k = arr[1];
    var problemsPerChapter = lines[1].split(/\s+/).map(i => parseInt(i));
    var specialProblems = 0;
    var page = 1;
    for(var i = 0; i < n; i++) {
        var problems = problemsPerChapter[i];
        for(var p = 1; p <= problems; p++) {
            if(p === page) {
                specialProblems++;
            }
            if(p !== problems && p % k === 0) {
                page++;
            }
        }
        page++;
    }
    console.log(specialProblems);
};

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";
process.stdin.on("data", input => _input += input);
process.stdin.on("end", () => processData(_input));