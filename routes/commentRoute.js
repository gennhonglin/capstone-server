const router = require('express').Router();
const commentController = require('../controllers/commentController');


router
    .route("/comment")
        .get(commentController.locationPosts);
            // .post(commentController.addPosts);



module.exports = router;