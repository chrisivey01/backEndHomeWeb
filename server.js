const http = require('http');
const app = require('./app');


const port = process.env.port || 3000;
const server = http.createServer(app);

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'windowwasher1',
    database: 'sakila'
})

db.connect();

server.listen(port);

