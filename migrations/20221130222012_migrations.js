/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('player', (table) => {
    table.uuid('id').primary();
    table.string('email').notNullable().unique();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('city');
    table.string('country');
    table.string('position');
    table.string('experience');
    table.string('type');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('player');
};
