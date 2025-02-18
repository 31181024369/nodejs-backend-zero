const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesAPI } = require('../controllers/apiController');
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomer, putUpdateCustomers } = require("../controllers/customerController");
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
routerAPI.post('/files', postUploadMultipleFilesAPI);
routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomer);
routerAPI.put('/customers', putUpdateCustomers);
//putUpdateCustomers


module.exports = routerAPI;