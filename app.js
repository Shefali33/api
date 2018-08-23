var express = require('express');
var bodyParser = require ('body-parser');
var jwt = require('jsonwebtoken');
import connectToDb from './db/connection';
import config from './db/config';
import users from './routes/useroutes'

const port = config.serverPort;
// call db file function
connectToDb();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/api',users);


app.listen(port, () => {
    console.log('server started - ', port);
});