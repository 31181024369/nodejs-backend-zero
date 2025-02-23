const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesAPI } = require('../controllers/apiController');
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomer, putUpdateCustomers, deleteACustomers, deleteArrayCustomer } = require("../controllers/customerController");
const {postCreateProject,getAllProject}=require("../controllers/projectController");
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
routerAPI.delete('/customers', deleteACustomers);
routerAPI.delete('/customers-many', deleteArrayCustomer);
routerAPI.post('/projects',postCreateProject);
routerAPI.get('/projects',getAllProject);
routerAPI.get('/info', (req, res) => {
    console.log(">>check query:", req.query);
    return res.status(200).json({
        EC: 0,
        data: req.query
    });
});
routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(">>check query:", req.params);
    return res.status(200).json({
        EC: 0,
        data: req.params
    });
})



module.exports = routerAPI;