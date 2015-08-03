const BaseModel = require('../../utils/base_model');

const instanceProps = {
  tableName: 'projects',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(require('../users/model'));
  },
  pages: function() {
    reutrn this.hasMany(require('../pages/model'));
  }
};

const classProps = {
  typeName: 'projects',
  filters: {
    user_id: function(qb, value) {
      return qb.whereIn('user_id', value);
    },
    featured: function(qb, value) {
      return qb.whereIn('featured', value);
    },
    title: function(qb, value) {
      return qb.whereIn('title', value);
    }
  },
  relations: [
    'user',
    'pages'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
