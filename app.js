
require('dotenv').load();
var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var swords = require('./routes/swords');
var potion = require('./routes/potion');

app.use('/api/swords', swords);
app.use('/api/potion', potion);

app.listen(process.env.PORT || 8080);
console.log('Woot, server started 8080');
