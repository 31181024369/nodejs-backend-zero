const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi } = require('../controllers/apiController');
routerAPI.get('/', (req, res) => {
    res.send("hello word with apis")
});
routerAPI.get('/abc', (req, res) => (
    res.status(200).json({
        data: 'hello word first apis'
    })
));
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);
routerAPI.post('/file', postUploadSingleFileApi);

module.exports = routerAPI;