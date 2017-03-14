var fs = require('fs');
var hrstart = process.hrtime();

var test = true;

var a = test ? 1 : 3;
var b =  test ? 2 : 4;

var hrend = process.hrtime(hrstart);

fs.appendFileSync('./t2.txt', hrend[1]/(1000000) + '\n');
