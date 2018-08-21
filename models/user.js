import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username :String,
    email: String,
    password:String,
    full_name:String,
}, {timestamps : true});

let usersModel = mongoose.model('users', userSchema);

export default usersModel