import userModel from "../models/user"
const ObjectID = require('mongodb').ObjectID;
const updateController = {}

updateController.updateUser = async (req, res, next) => {
    // console.log(req.decoded);
    // var id = ObjectId.valueOf()
 let users =   userModel
                    .updateOne({"_id": ObjectID(req.decoded.id)}, 
                    {$set:{"full_name": req.body.fname}}, function(err, result){
                        if (err) {
                            console.log('Error updating object: ' + err);
                            res.send({'error':'An error has occurred'});
                        } else {
                            console.log("User updated");
                            res.send("User Update Successfully");
                        }
                    });
            
}


export default updateController;