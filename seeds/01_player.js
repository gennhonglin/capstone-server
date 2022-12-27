/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('player').del()
  await knex('player').insert([
    {
      id: 1,
      email: 'test@gmail.com',
      name: "Genn",
      password: "password"
    },
    {
      id: 2,
      email: 'test2@gmail.com',
      name: "Genn",
      password: "password"
    },
    {
      id: 3,
      email: 'test3@gmail.com',
      name: "Genn",
      password: "password"
    }

  ]);
};
