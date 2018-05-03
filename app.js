
const express = require('express');
const app = express();
const db = require('./db/db');
const bodyParser = require('body-parser');
const patient = require('./routes/patient')
const cors = require('cors')


app.use(cors())


