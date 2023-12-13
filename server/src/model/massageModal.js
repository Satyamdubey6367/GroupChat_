const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        
    },
    userEmail:{
        type:String,
        required:true,
       
    },
    message:{
        type:String,
        required:true
    }
})
 
const messageModel =  mongoose.model("message",messageSchema)


module.exports = messageModel