var fs = require('fs');
var hrstart = process.hrtime();

var test = true;
var a, b;

if(test) {
    a = 1;
    b = 2;
} else {
    a = 3;
    b = 4;
}

var hrend = process.hrtime(hrstart);

fs.appendFileSync('./t1.txt', hrend[1]/(1000000) + '\n');
