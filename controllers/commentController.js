const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');

exports.commentPosts = (req,res) => {
    knex('comments')
    .select('comment_id', 'comment', 'date')
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`error in retrieving comments ${err}`));
}