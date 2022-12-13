const router = require('express').Router();
const playerController = require('../controllers/playerController');


router
    .route('/player')
        .post(playerController.newPlayer);

router
    .route('/player/login')
        .post(playerController.loginPlayer);

module.exports = router;