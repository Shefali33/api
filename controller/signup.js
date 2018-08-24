import userModel from "../models/user"

const supController = {}

supController.addUser = async (req, res, next) => {
    let newUser = new userModel({//New user values
       usename:req.body.username,
       email:req.body.email,
       password:req.body.password,
       full_name:req.body.fname
    });

    try{// Saving new user
        const savedUser = await newUser.save()
        res.send('added: ' + savedUser);
        console.log("User added");
    }
    catch(err){
        res.send('GOT error in adding user');
        console.log("Error adding user")
    }
}

export default supController;