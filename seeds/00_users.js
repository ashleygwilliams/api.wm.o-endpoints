const users_data = require('../data/users/').data;

exports.seed = function(knex, Promise) {
  return Promise.join(
      knex('users').insert(users_data)
  );
};
