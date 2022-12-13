const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');



exports.locationPosts = (req,res) => {
    knex('location')
    .select('id', 'location_name', 'address', 'city')
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`error in retrieving warehouses ${err}`));
}