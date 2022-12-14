const router = require('express').Router();
const commentController = require('../controllers/commentController');


router
    .route("/comment")
        .post(commentController.addComment);

router
    .route("/comment/:id")
        .get(commentController.commentPosts);



module.exports = router;