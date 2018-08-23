import userModel from "../models/user"

const sinController = {}

sinController.loginUser =  (req, res, next) => {
    await userModel 
        .findOne({email:req.body.email})
        .exec((err, user) => {
            if(err){
                res
                    .status(400)
                    .json(err)
            }if (user){
                user.password == req.body.password
                res
                    .send("Loggedin")
                    .json({user})
            }
            else{
                res
                    .status(400)
                    .json(err)
            }
        })
}

export default sinController;

