

const express = require('express');
const app = express();
const db = require('../db/db');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.get('/patient', function (req, res) {
    db.query('SELECT * FROM sakila.patient', function (error, results) {
        if (error) throw error;
        return res.send(JSON.stringify(results))

    });
});

//need to clean this up, need advice, dont like it
app.post('/patient', function(req,res){
    let first_name = req.body.firstName;
    let last_name = req.body.lastName;
    let reason = req.body.reason;
    let doctor = req.body.doctor;

    db.query("INSERT INTO sakila.patient SET ? ", { first_name, last_name, reason, doctor }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
    });
});


// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
