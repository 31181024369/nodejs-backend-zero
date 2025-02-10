const express = require('express');
const router = express.Router();
const { getHomePage, getHoiDanIT, getABC, postCreateUser, getCreatePage, getUpdatePage, postUpdatePage, postDeletePage, postHandleRemoveUser } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/hoidanit', getHoiDanIT);
router.post('/create-user', postCreateUser);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdatePage)
router.post('/delete-user/:id', postDeletePage)
router.post('/delete-user', postHandleRemoveUser)
module.exports = router;