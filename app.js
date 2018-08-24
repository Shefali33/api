let express = require('express');
let bodyParser = require ('body-parser');
let passport = require('passport');
import connectToDb from './db/connection';
import config from './db/config';
require('./routes/middleware');
import users from './routes/useroutes'
import usersInfo from './routes/userinforoutes'
const port = config.serverPort;
// call db file function
connectToDb();

const app = express();

//body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Setting header to avoid C-S conflicts
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

//passport 
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(function(user, done) {
//     done(null, user._id);
//   });
  
//   passport.deserializeUser(function(userId, done) {
//     User.findById(userId, (err, user) => done(err, user));
//   });

//User route
app.use('/api',users);
// app.use('/api/user',usersInfo);



app.listen(port, () => {
    console.log('server started - ', port);
});