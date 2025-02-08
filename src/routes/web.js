const express = require('express');
const router = express.Router();
const { getHomePage, getHoiDanIT, getABC, postCreateUser } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/hoidanit', getHoiDanIT);
router.post('/create-user', postCreateUser);
module.exports = router;