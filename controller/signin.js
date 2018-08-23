import userModel from "../models/user"
var express = require('express');
const app = express();
var jwt = require('jsonwebtoken');
app.set('secrettoken', 'qwertyuiopasdfghjkl');

const sinController = {}

sinController.loginUser =  (req, res, next) => {
    userModel 
        //finds the user
        .findOne({email:req.body.email})
        .exec((err, user) => {
            if (user){
                // email & password matches
                if(user.password == req.body.password){
                    const payload = {
                        id: user._id 
                      };
                        var token = jwt.sign(payload, app.get('secrettoken'), {
                        expiresIn: "1 day"  // expires in 24 hours
                          });
                  
                          // return the information including token as JSON
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                          });
            }
                else{
                    res
                        .status(400)
                        .json(err)
                        console.log("Password incorrect");
                }
            }
            // email not found
            else{
                res.send("User not found");
                console.log("not found");
            }
        })
}

export default sinController;

