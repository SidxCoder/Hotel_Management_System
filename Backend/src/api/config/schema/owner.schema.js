import mongoose from "mongoose"
const ownerschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    idProof:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    }

})

const owner = mongoose.model("owner",ownerschema)
export default owner