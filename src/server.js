require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');

// const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
app.use(fileUpload());

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

configViewEngine(app);


app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


// Create the connection to database

// (async () => {
//     try {
//         // await connection();
//         const url = process.env.DB_HOST_WITH_DRIVER;
//         const client = new MongoClient(url);

//         const dbName = process.env.DB_NAME;
//         await client.connect();
//         console.log('Connected successfully to server');
//         const db = client.db(dbName);

//         // const collection = db.collection('tasks');

//         // collection.insertOne({ "name": "long sama" });
//         // let a = await collection.findOne({ name: "long sama" });
//         // console.log(">>>find:", a);
//         app.listen(port, hostname, () => {
//             console.log(`Backend zero app listening on port ${port}`)
//         })

//     } catch (error) {
//         console.log(">>>Error connect to DB: ", error)
//     }
// })()
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

