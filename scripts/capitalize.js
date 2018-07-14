var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
  string = line.trim().toLowerCase();
  console.log(string.charAt(0).toUpperCase() + string.slice(1));
});
