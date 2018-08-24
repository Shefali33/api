import express from "express";
// import verifyToken from "./middleware"
// import supController from "../controller/signup"
// import sinController from "../controller/signin"
// import updateController from "../controller/update"
let passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router()

//routes
// router.post('/register', supController.addUser)
router.post('/register', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
  res.json({ 
    message : 'Signup successful',
    user : req.user 
  });
});
// router.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });
router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {  
    try {
      if(err || !user){
        console.log(err);
        return next(error);        const error = new Error('An Error occured')

      }
      req.login(user, { session : false }, async (error) => {
        if( error ) return next(error)
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { _id : user._id, email : user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user : body },'top_secret');
        //Send back the token to the user
        return res.json({ token });
      });   
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// module.exports = router;
  router.get('/user', (req, res, next) => {
    //We'll just send back the user details and the token
    res.json({
      message : 'You are an authenticated user',
      user : req.user,
      token : req.query.secret_token
    })
  });

export default router;