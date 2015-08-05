const elements_data = require('../data/elements/').data;

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('elements').insert(elements_data)
  );
};
