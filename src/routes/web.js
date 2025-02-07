const express = require('express');
const router = express.Router();
const { getHomePage, getHoiDanIT, getABC } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/hoidanit', getHoiDanIT);
module.exports = router;