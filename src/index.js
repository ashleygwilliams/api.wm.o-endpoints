const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  type: ['application/json', 'application/vnd.api+json']
}));

app.get('/v1', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send("api.webmaker.org");
});

app.get('/', function (request, response) {
  response.redirect('/v1');
});

module.exports = app;
