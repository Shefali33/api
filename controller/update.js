import userModel from "../models/user"

const updateController = {}

updateController.updateUser = async (req, res, next) => {
    // console.log(req.decoded);
    // var id = ObjectId.valueOf()
 let users =   userModel.findOne({ObjectId:req.decoded.id})
            // .updateOne(
            //        {_id:req.decoded.id},{
            //         $set  :{password:req.body.fname}
            //     })
            
            // .findById(req.decoded.id, function(err, user) {
            // if (err) throw err;
      
            // // change the users fullname
            // user.full_name = req.body.fname;
        
            // // save the user
            // user.save(function(err) {
            // if (err) throw err;
        
            // console.log('User successfully updated!');
            // });
      
//       });
console.log(users);
}


export default updateController;