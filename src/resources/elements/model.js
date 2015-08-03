const BaseModel = require(''../../utils/base_model');

const instanceProps = {
  tableName: 'elements',
  hasTimestamps: true,
  page: function() {
    return this.belongsTo(require('../pages/model'));
  }
};

const classProps = {
  typeName: 'elements',
  filters: {
    page_id: function(qb, value) {
      return qb.whereIn('page_id', value);
    }
  },
  relations: [
    'page'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
