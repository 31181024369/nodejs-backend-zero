const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI } = require('../controllers/apiController');
routerAPI.get('/', (req, res) => {
    res.send("hello word with apis")
});
routerAPI.get('/abc', (req, res) => (
    res.status(200).json({
        data: 'hello word first apis'
    })
));
routerAPI.get('/users', getUsersAPI);


module.exports = routerAPI;