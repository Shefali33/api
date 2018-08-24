// import express from "express";
// import secret from '../constants';
import userModel from '../models/user';
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;
// const app = express();
// const jwt = require('jsonwebtoken');
// app.set('secrettoken', secret);

//Create a passport middleware to handle user registration
passport.use('signup', new localStrategy({
    usernameField : 'email',
    passwordField : 'password'
    }, async (email, password, done) => {
      try {
        //Save the information provided by the user to the the database
        const user = await userModel.create({ email, password });
        //Send the user information to the next middleware
        return done(null, user);
      } catch (error) {
        done(error);
      }
  }));
  
  //Create a passport middleware to handle User login
passport.use('login', new localStrategy({
    usernameField : 'email',
    passwordField : 'password'
    }, async (email, password, done) => {
    try {
      //Find the user associated with the email provided by the user
      const user = await userModel.findOne({ email });
      if( !user ){
        //If the user isn't found in the database, return a message
        return done(null, false, { message : 'User not found'});
      }
      //Validate password and make sure it matches with the corresponding hash stored in the database
      //If the passwords match, it returns a value of true.
      // const validate = await compare(password, user.password);
      if( user.password !==password ){
        return done(null, false, { message : 'Wrong Password'});
      }
      //Send the user information to the next middleware
      return done(null, user, 
        
        { message : 'Logged in Successfully'});
    } catch (error) {
      return done(error);
    }
  }));

//This verifies that the token sent by the user is valid
passport.use(new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey : 'top_secret',
    //we expect the user to send the token as a query paramater with the name 'secret_token'
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken('secret_token')
},  async (token, done) => {
    try {
      //Pass the user details to the next middleware
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  }));

//////////////////////////////////////////////////////////////////////////////

// const verifyToken = async (req,res,next) => {

//     //Checking token
//     let token = req.body.token || req.query.token || req.headers.authorization;
//     if(token){
//        jwt.verify(token, app.get('secrettoken'), function(err, decoded) {   
//         if(err){
//             return res.json({ success: false, message: 'Failed to authenticate token.' });    
//         }  else{
//             //token decoding
//             req.decoded = decoded;    
//             next();
       
//          } 
//         })
//     } else {

//         // if there is no token
//         // return an error
//         return res.status(403).send({ 
//             success: false, 
//             message: 'No token provided.' 
//         });
    
//       }
// }

// export default verifyToken;;
