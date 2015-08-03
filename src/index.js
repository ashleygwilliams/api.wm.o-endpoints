const fs = require('fs');
const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const resourcePath = path.join(__dirname, 'resources');
const resources = fs.readdirSync(resourcePath);

const app = express();

const API = require('./utils/api');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  type: ['application/json', 'application/vnd.api+json']
}));

resources.forEach(function (resource) {
  API.register(resource);
  app.use(API.endpoint(resource));
});

app.get('/v1', function (request, response) {
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(API.index(), null, 2));
});

app.get('/', function (request, response) {
  response.redirect('/v1');
});

module.exports = app;
