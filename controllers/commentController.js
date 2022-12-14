const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');

exports.commentPosts = async (req,res) => {


    try {
        const data = await knex('comments').where({post_id: req.body.post_id}).select('comment_id', 'comment', 'date');

        if(!data.length) {
            return res.status(404).send(`Post with id: ${req.params.id} is NOT a valid post.id `);
        }

        res.status(200).json(data[0]);
    } catch(err) {
        res.status(400).send(`Error retrieving post Id: ${err}`)
    }
}

exports.addComment = async (req, res) => {
    if(!req.body.comment || !req.body.date) {
        return res.status(400).send('Please make sure you provide all necessary fields');
    }

    try {
        const newComment = req.body;
        newComment.comment_id = uuidv4();

        const data = await knex('comments').insert(newComment);
        res.status(201).send(data);
    } catch (err) {
        res.status(400).send(`Error creating new Post: ${err}`);
    }
}