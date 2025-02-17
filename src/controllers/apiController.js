const User = require('../models/user');
const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    });
}
const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email,
        name,
        city
    })
    return res.status(200).json({
        EC: 0,
        data: user
    });
}
const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    let user = await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    return res.status(200).json({
        EC: 0,
        data: user
    });

}
const deleteUserAPI = async (req, res) => {
    const id = req.body.id;
    let result = await User.deleteOne({
        _id: id
    });
    return res.status(200).json({
        EC: 0,
        data: result
    });
}
module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI
}