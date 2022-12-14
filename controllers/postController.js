const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');



exports.locationPosts = (req,res) => {
    knex('location')
    .select('post_id', 'location_name', 'address', 'city', 'level')
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`error in retrieving locations ${err}`));
}

exports.addPosts = async (req, res) => {
    if(!req.body.location_name || !req.body.address || !req.body.city || !req.body.level  || !req.body.registration  || !req.body.player_id ) {
        return res.status(400).send('Please make sure you provide all necessary fields');
    }

    try {
        const newPost = req.body;
        newPost.post_id = uuidv4();

        const newPostUrl = `/location/${newPost.post_id}`
        const data = await knex('location').insert(newPost);
        res.status(201).location(newPostUrl).send(newPostUrl);
    } catch (err) {
        res.status(400).send(`Error creating new Post: ${err}`);
    }
}

exports.singlePost = async (req, res) => {
    try {
        const data = await knex('location').where({post_id: req.params.id});

        if(!data.length) {
            return res.status(404).send(`Post with id: ${req.params.id} is NOT a valid post.id `);
        }

        res.status(200).json(data[0]);
    } catch(err) {
        res.status(400).send(`Error retrieving post Id: ${err}`)
    }
}