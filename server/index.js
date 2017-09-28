const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '../client')));

app.get('/hi', (req, res) => {
  res.send('Hello worrrld');
});

app.listen(3000, () => {
  console.log('App server listening on port 3000!');
});
