/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {
      comment_id: 1,
      post_id: 1,
      player_id: 1,
      comment: "TESTING TESTING",
      date: "May 20, 2022"
    },
    {
      comment_id: 2,
      post_id: 2,
      player_id: 2,
      comment: "Tester",
      date: "May 21, 2022"
    },
    {
      comment_id: 3,
      post_id: 3,
      player_id: 3,
      comment: "WOOO",
      date: "May 22, 2022"
    }

  ]);
};
