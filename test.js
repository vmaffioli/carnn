const carnn = require('.');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Number:", function(n) {
    rl.question("Language:\n(default en-us)", function(l) {
        console.log(carnn(n,l))
        rl.close();
    });
});
