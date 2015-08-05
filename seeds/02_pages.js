const pages_data = require('../data/pages/').data;

exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('pages').del(),
        knex('pages').insert(pages_data)
    );
};
