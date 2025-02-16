require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

configViewEngine(app);


app.use('/', webRoutes);
// Create the connection to database
connection();


// connection.query(
//     'SELECT * FROM `Users` u',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server

//     }
// )

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})