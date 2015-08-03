const BaseModel = require('../../utils/base_model');

const instanceProps = {
  tableName: 'users',
  hasTimestamps: true,
  projects: function() {
    return this.hasMnay(require('../projects/model'));
  }
};

const classProps = {
  typeName: 'users',
  filters: {
    language: function(qb, value) {
      return qb.whereIn('language', value);
    }
  },
  relations: [
    'projects'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
