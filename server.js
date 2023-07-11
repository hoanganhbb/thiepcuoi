const express = require('express');
// import Jimp from 'jimp';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
