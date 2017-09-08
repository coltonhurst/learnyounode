// step 3

let fs = require('fs');

let filePath = process.argv[2];
let fileBuffer = fs.readFileSync(filePath);
let fileContents = fileBuffer.toString();
let newlineCount = 0;

for (let i = 0; i < fileContents.length; i++) {
    if (fileContents[i] === '\n')
        newlineCount++;
}

console.log(newlineCount);

/*

A shorter way...

let fs = require('fs');
console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);

*/