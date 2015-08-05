exports.up = function(knex) {
  return knex.schema.createTable('users', function(t) {
    t.bigIncrements('id').unique().notNullable().primary();
    t.string('username').unique().notNullable();
    t.string('language').defaultTo('en-US');
    t.boolean('moderator').defaultTo(false);
    t.boolean('staff').defaultTo(false);

    t.timestamp('deleted_at').defaultTo(null);
    t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
