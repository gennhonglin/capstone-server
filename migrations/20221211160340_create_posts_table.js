/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('location', (table) => {
        table.uuid('post_id').primary();
        table.uuid('player_id')
        .notNullable()
        .references('id')
        .inTable('player')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('location_name').notNullable();
        table.string('address').notNullable();
        table.string('city').notNullable();
        table.string('registration').notNullable();
        table.string('level').notNullable();
        table.string('long');
        table.string('lat');
        
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('location');
};
