const projects_data = require('../data/projects').data;

exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('projects').del(), 
        knex('projects').insert(projects_data)
    );
};
