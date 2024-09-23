// create web server with express
const express = require('express');
const app = express();
const port = 3000;

// import comments data
const comments = require('./comments.json');

// create a route for getting all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// create a route for getting a specific comment
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});