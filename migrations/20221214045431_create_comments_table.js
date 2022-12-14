/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.uuid('comment_id').primary();
        table.uuid('post_id')
        .notNullable()
        .references('id')
        .inTable('player')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.uuid('player_id')
        .notNullable()
        .references('id')
        .inTable('player')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('comment').notNullable();
        table.string('date').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
