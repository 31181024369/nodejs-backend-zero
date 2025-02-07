const getHomePage = (req, res) => {
    res.send('hello world vs hoi dan it');
}
const getABC = (req, res) => {
    res.send('check abc');
}
const getHoiDanIT = (req, res) => {
    res.render('sample.ejs');
}
module.exports = {
    getHomePage,
    getABC,
    getHoiDanIT
}