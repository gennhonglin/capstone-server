const router = require('express').Router();
const commentController = require('../controllers/commentController');


router
    .route("/comment")
        .get(commentController.commentPosts);
            // .post(commentController.addPosts);



module.exports = router;