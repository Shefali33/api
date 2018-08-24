import userModel from "../models/user"
const ObjectID = require('mongodb').ObjectID;

const updateController = {}
updateController.updateUser = async (req, res, next) => {
  
userModel
    .updateOne({"_id": ObjectID(req.decoded.id)}, // Finding User on basis of _id
        {$set:{"full_name": req.body.fname}}, function(err, result){ //Updating fullname
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