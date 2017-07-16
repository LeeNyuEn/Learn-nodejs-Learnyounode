var fs = require('fs');
var path = process.argv[2];
var content = fs.readFileSync(path);
var count = (content.toString().match(/\n/g) || []).length;
console.log(count);