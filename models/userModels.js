const mongoose =require('mongoose')
const userShema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('users',userShema)

