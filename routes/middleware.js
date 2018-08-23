import express from "express";
const app = express();
const jwt = require('jsonwebtoken');
app.set('secrettoken', 'qwertyuiopasdfghjkl');

function verifyToken (req,res,next){
    let token = req.body.token || req.query.token || req.headers.authorization;
    if(token){
       jwt.verify(token, app.get('secrettoken'), function(err, decoded) {   
        if(err){
            return res.json({ success: false, message: 'Failed to authenticate token.' });    
        }  else{
            req.decoded = decoded;    
            next();
       
         } 
        })
    } else {

        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    
      }
}

export default verifyToken;;
