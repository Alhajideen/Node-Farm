const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

const textOut = `This is a message about avocados: ${textIn}. \n created on ${Date.now}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File Written');
