import infoModel from "../models/userinfo"

const infoController = {}

infoController.userDetails = async (req, res, next) => {
    let newUser = new infoModel({// User Details 
       name:req.body.name,
       address:req.body.address,
       city:req.body.city,
       age:req.body.age
    });

    try{// Saving user details
        const savedUser = await newUser.save()
        res.send('added: ' + savedUser);
        console.log("User details added");
    }
    catch(err){
        res.send('GOT error in adding user details');
        console.log("Error adding details")
    }
}

export default infoController;