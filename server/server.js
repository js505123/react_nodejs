
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4010;


console.log("env.PORT : " + process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));


const data = fs.readFileSync("./db.json");
const conf = JSON.parse(data);
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : conf.host,
    user     : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
});

connection.connect();

//
// app.get('/api/test', (req, res) => {
//     //res.send('Hello World!');
// });
//

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}!`);
// });


app.get('/api/test', function (req, res) {
    //res.send('Hello World!');
    console.log("API 요청");

    connection.query('SELECT * FROM blog_post',function ( err, rows, fields){
        if (err){
            console.log('executing query string is fail');
            throw err;
        } else {
            res.send(rows);
        }
    });

});


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

















