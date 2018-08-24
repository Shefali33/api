import infoModel from "../models/userinfo"

const getUserDetails = async (req,res,next)  =>{
        infoModel
                .findOne({ address: "abcd colony" })
                .populate('name').exec((err, user) => {
                 if(err) throw err
         
                 console.log(user);
                 res.send('User: ' + user);

      })
  }
  
  export default getUserDetails