const router = require('express').Router();
const postController = require('../controllers/postController.js');

router
    .route("/location")
        .get(postController.locationPosts);



module.exports = router;