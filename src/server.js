require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const kitten = require('./models/Kitten');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

configViewEngine(app);


app.use('/', webRoutes);




const cat = new kitten({ name: 'hoidan it' });
cat.save();
// Create the connection to database

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`)
        })

    } catch (error) {
        console.log(">>>Error connect to DB: ", error)
    }
})()


// connection.query(
//     'SELECT * FROM `Users` u',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server

//     }
// )

