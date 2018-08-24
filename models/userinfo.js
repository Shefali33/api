import mongoose from 'mongoose'

const infoSchema = mongoose.Schema({
   name:{type:mongoose.Schema.Types.ObjectId, ref:'users'},
   address: String,
   city:String,
   age:Number,
}, {timestamps : true});

let infoModel = mongoose.model('usersinfos', infoSchema);

export default infoModel