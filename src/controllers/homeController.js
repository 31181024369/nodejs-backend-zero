const connection = require('../config/database');
const getHomePage = (req, res) => {
    // let users = [];
    // connection.query(
    //     'SELECT * FROM `Users` u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">>>results home page=", results);
    //         res.send(JSON.stringify(users));
    //     }
    // );
    return res.render('home.ejs');

}
const getABC = (req, res) => {
    res.send('check abc');
}
const getHoiDanIT = (req, res) => {
    res.render('sample.ejs');
}
const postCreateUser = (req, res) => {
    console.log("body", req.body);
    res.send('create user');
}
module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT,
    postCreateUser
}