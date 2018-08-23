import userModel from "../models/user"

const supController = {}

supController.addUser = async (req, res, next) => {
    let newUser = new userModel({
       usename:req.body.username,
       email:req.body.email,
       password:req.body.password,
       full_name:req.body.fname
    });

    try{
        const savedUser = await newUser.save()
        res.send('added: ' + savedUser);
        console.log("User added");
    }
    catch(err){
        res.send('GOT error in adding order');
        console.log("Error adding")
    }
}

export default supController;