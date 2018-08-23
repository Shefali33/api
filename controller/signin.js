import userModel from "../models/user"

const sinController = {}

sinController.loginUser =  (req, res, next) => {
    userModel 
        .findOne({email:req.body.email})
        .exec((err, user) => {
            if (user){
                if(user.password == req.body.password){
                res
                    .send("Loggedin")
                    // .json({user})
                    console.log(user);
            }
                else{
                    res
                        .status(400)
                        .json(err)
                        console.log("Password incorrect");
                }
            }
            else{
                res.send("User not found");
                console.log("not found");
            }
        })
}

export default sinController;

