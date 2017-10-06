var express = require('express');

const port = process.env.PORT || 8080;

var app = express();

app.set('view engine','html');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`App is up on port ${port}`);
});
