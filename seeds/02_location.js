/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('location').del()
  await knex('location').insert([
    {
      id: 1,
      player_id: 1,
      location_name: "Creekside",
      address: "1 Athletes Way",
      city: "Vancouver",
      registration: "https://ca.apm.activecommunities.com/vancouver/Activity_Search?ActivityCenterID=29&IsSearch=true&_ga=2.153942781.479132305.1670777464-1607124399.1670604715",
      level: "Beginner"
    },
    {
      id: 2,
      player_id: 2,
      location_name: "Creekside",
      address: "1 Athletes Way",
      city: "Vancouver",
      registration: "https://ca.apm.activecommunities.com/vancouver/Activity_Search?ActivityCenterID=29&IsSearch=true&_ga=2.153942781.479132305.1670777464-1607124399.1670604715",
      level: "Beginner"
    },
    {
      id: 3,
      player_id: 3,
      location_name: "Creekside",
      address: "1 Athletes Way",
      city: "Vancouver",
      registration: "https://ca.apm.activecommunities.com/vancouver/Activity_Search?ActivityCenterID=29&IsSearch=true&_ga=2.153942781.479132305.1670777464-1607124399.1670604715",
      level: "Beginner"
    }
  ]);
};
