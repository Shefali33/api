import userModel from "../models/user"
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

// const sinController = () =>{

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
  },
    function(req,username, password, done) {
      userModel
            .findOne({ username: req.body.email })
            .exec((err, user) => {
                if (err) { return done(err); } 
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(req.body.password)) { return done(null, false); }
                return done(null, user);
            });
    }
  ));
  
  

// }
// export default sinController;

