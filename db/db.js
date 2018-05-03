const express = require('express');
const app = express();
const mysql = require('mysql');


// connection configurations
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'windowwasher1',
    database: 'sakila'
});

// connect to database
db.connect();

module.exports = db;