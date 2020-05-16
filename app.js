const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(8000, () => {
  console.log('localhost:8000')
});

app.set('view engine', 'pug');

app.use(express.static('public'));