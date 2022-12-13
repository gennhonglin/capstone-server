const router = require('express').Router();
const postController = require('../controllers/postController.js');

router
    .route("/location")
        .get(postController.locationPosts)
        .post(postController.addPosts);

router
    .route("/location/:id")
        .get(postController.singlePost);



module.exports = router;