const fs = require('fs');
const url = require('url');
const http = require('http');

/////////////////////////////////////
///////FILES

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
//Blocking-synchronous way
// const textOut = `This is a message about avocados: ${textIn}. \n created on ${Date.now}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n ${data3}`, 'utf-8', (err) => {
//         console.log('Files written');
//       });
//     });
//   });
// });
// console.log('Reading file...');

/////////////////////////////////////
///////SERVER
const PORT = 8080;
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('Hello from the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('Hello from the PRODUCT');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Page not found<h1/>');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Listening on Port ${PORT}`);
});
