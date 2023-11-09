var test = JSON.stringify(require("./config.json"));
var fs = require('fs');

fs.writeFile('mynewfile3.txt', test, function (err) {
  if (err) throw err;
  console.log('Saved!');
});