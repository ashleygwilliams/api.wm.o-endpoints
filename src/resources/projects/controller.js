const thisFolderName = __dirname.split('/').pop();

const API = require('../../utils/api');

module.exports = new API.Controller({
  model: require('./model'),
  basePath: thisFolderName
});
