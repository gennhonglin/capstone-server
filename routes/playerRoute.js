const router = require('express').Router();
const playerController = require('../controllers/playerController');


router
    .route('/player')
        .post(playerController.newPlayer);

router
    .route('/player/login')
        .post(playerController.loginPlayer);

router
    .route('/player/:id')
        .get(playerController.playerInfo)
        .post(playerController.updatePlayerInfo);

module.exports = router;