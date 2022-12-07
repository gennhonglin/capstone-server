/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('player').del()
  await knex('player').insert([
    {id: 1, colName: 'email'},
    {id: 2, colName: 'password'}
  ]);
};
