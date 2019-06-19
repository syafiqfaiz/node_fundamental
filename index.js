// const Person = require('./person');
// const person1 = new Person('faiz', 30);

// person1.greeting();


// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('called listener:', data))

// logger.log('Hello world')


const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  // if (req.url == '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //     if(err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' })
  //     res.end(content);
  //   })
  // }

  // if (req.url == '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' })
  //     res.end(content);
  //   })
  // }

  // if (req.url == '/api/users') {
  //   const users = [
  //     {name: 'bob', age: 23},
  //     {name: 'john doe', age: 30}
  //   ];
  //   res.writeHead(200, {'Content-Type': 'application/json'})
  //   res.end(JSON.stringify(users));
  // }

  // build file path
  let filePath = path.join(__dirname, 'public', req.url == '/' ? 'index.html' : req.url);

  // extension of file
  let extName = path.extname(filePath);

  // initial content type
  let contentType = 'text/html';

  // check ext and set content type
  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.csss':
      contentType = 'text/css';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // read file
  fs.readFile(filePath, (err, content) =>{
    if(err){
      if (err.code = 'ENOENT') {
        // page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (er, content) =>{
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(content, 'utf8');
        })
      } else {
        res.writeHead(500);
        res.end(`Some server error: ${err.code}`)
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf8');
    }
  })
});

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
