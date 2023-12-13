const express = require('express')

const mongoose = require("mongoose")
const cors = require("cors")
const massageRoutes =require("./src/Routes/massageRoutes")
const userRouter= require("./src/Routes/userRoutes")


const port =3001
const app = express()





mongoose.connect("mongodb+srv://satyamdubey6367:Satyam123@cluster0.pdmwztb.mongodb.net/groupchatApp?retryWrites=true&w=majority",
   ).then((res)=>{
     console.log(" database connected")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json()); 
app.use(cors())
const UserModel= require("./src/model/userModal")
const massageModel = require('./src/model/massageModal')
const {addUser,getUser,deleteUser,updateUser,login} = require("./src/controlor/userControlor")

const {addmassage,getmassage,deletemassage,updatemassage} = require ("./src/controlor/massageControlor")




app.use("/",userRouter)
app.use("/massage",massageRoutes)

// app.get("/getUser",getUser)
// app.delete("/removeUser",deleteUser)
// app.put("/updateUser",updateUser)



//  Server -------------------------------@@@@@@@@@@@@@@@@
 
 app.listen(3001,(error)=>{
    if(error)
    {
        console.log("something is wrong")
    }

    console.log(`server is running on port ${port}`)
})
 