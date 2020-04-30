chalk = require('chalk');
//import chalk from 'chalk';

//File system
const fs = require('fs');
fs.writeFileSync('app.txt', 'First text file created - now edited');

//for file paths
var path = require('path');
var p = '/Users⁩/mac⁩/Desktop⁩/edurekaNodeJS/app.txt';
console.log(path.dirname(p));
console.log(path.extname(p));
console.log(path.basename(p));
console.log(path.isAbsolute(p));

//for binarydata, faster string manipulation
var buff1 = Buffer.from('123456789');
var buff2 = Buffer.from('HELLO');
buff2.copy(buff1, 2, 1);
console.log(buff1.toString());
console.log(buff2.toString());
console.log(Buffer.concat([buff1, buff2]).toString());
console.log(buff1.equals(buff2));
console.log(Buffer.compare(buff2, buff2));

//for creating http server
var http = require('http');
http.createServer(
    function (req, res) {
        res.writeHead(200,{'Content-Type' : 'text/plain'});
        res.write('Hello World');
        res.end();
    }
).listen(8080);

//for URLs
var url = require('url');
var addr = 'http://localhost:8080/abcd.htm?year=2020';
var q = url.parse(addr,true);
console.log(q.host);
console.log(q.path);
console.log(q.search);

// to access utility function
var util = require('util');
var txt1 = 'Today %s is %d years old';
console.log(util.format(txt1,'John',11));
 
//gets info about os
var os = require('os');
console.log("Arch:",os.arch());
console.log("Platform:",os.platform());

//import your own module
var date = require('./date');
console.log('Time is : ',chalk.underline.blue(date()));







