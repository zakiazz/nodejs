const express = require('express')
const server = express();

const hostname = '0.0.0.0';
const port = 3000;

server.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World !');
})

server.get('/posts', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Voici les articles !');
})

server.get('/posts/:id', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let postId = req.params.id;
  res.end(`Voici l'article : ${postId}`);
})

server.post('/posts', (req, res) => {
  res.statusCode = 201;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Article crée !');
})


server.listen(port, hostname);