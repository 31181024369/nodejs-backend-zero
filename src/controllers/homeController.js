const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');
const User = require('../models/user');
const getHomePage = async (req, res) => {
    // let users = [];
    // connection.query(
    //     'SELECT * FROM `Users` u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">>>results home page=", results);
    //         res.send(JSON.stringify(users));
    //     }
    // );
    let results = await User.find({});
    console.log(">>>results:", results);
    return res.render('home.ejs', { listUsers: results });

}
const getABC = (req, res) => {
    res.send('check abc');
}
const getHoiDanIT = (req, res) => {
    res.render('sample.ejs');
}
const postCreateUser = async (req, res) => {
    console.log("body", req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log("email=", email, ",name=", name, ",city=", city);
    // connection.query(
    //     `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('create user');
    //     }
    // )
    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email,name,city) VALUES (?,?,?)`, [email, name, city]
    // );
    await User.create({
        email,
        name,
        city
    });
    // console.log(">>> check results:", results);
    res.send('Created user succeed');


}
const getCreatePage = (req, res) => {
    return res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    //let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    //console.log(">>prams:", userId);
    return res.render('edit.ejs', { userEdit: user });
}
const postUpdatePage = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    console.log(email, ",", name, ",", city, ",", id);
    await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    //await updateUserById(email, name, city, id);
    res.redirect('/');
}
const postDeletePage = async (req, res) => {
    const userId = req.params.id;
    //let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { userEdit: user });

}
const postHandleRemoveUser = async (req, res) => {
    let id = req.body.id;
    //await deleteUserById(id);
    let result = await User.deleteOne({
        _id: id
    });
    res.redirect('/');
}

module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdatePage,
    postDeletePage,
    postHandleRemoveUser,

}