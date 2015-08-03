const BaseModel = require('../../utils/base_model');

const instanceProps = {
  tableName: 'pages',
  hasTimestamps: true,
  project: function() {
    return this.belongsTo(require('../projects/model'));
  },
  elements: function() {
    return this.hasMany(require('../elements/model'));
  }
};

const classProps = {
  typeName: 'pages',
  filters: {
    project_id: function(qb, value) {
      return qb.whereIn('project_id', value);
    }
  },
  relations: [
    'project',
    'elements'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
