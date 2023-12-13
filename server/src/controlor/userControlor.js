const { json } = require("express")

const UserModel= require("../model/userModal")
const bcrypt = require ("bcrypt")  
var jwt = require('jsonwebtoken');
var key = "haskl1234sd"


// post method ---------------------------------

const addUser = async(req,res)=>{
    try{
        bcrypt.hash(req.body.password,10,async(err,hashPassword)=>{
       let user = new UserModel({...req.body,password:hashPassword})
       let isSave = await user.save()
       

          if(isSave)
          {
           return res.status(200).json({
                mssg:"user added successfully",
                status:200,
                isSave
            })     
       }
    })
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }
    
}

// // get method -----------------------------

const getUser=  async(req,res) =>
  
{
   try{
       let  users = await UserModel.find({})
       if(users.length != 0)
       {
        return res.status(200).json({
            massg:"add sucess",
            status:500,
            users
        })
       }
       
   }
   catch(err)
   {
       console.log(err)
       return res.status(500).json({
           mssg:"server error",
           status:500,
           err:JSON.stringify(err)

       })
   }

}

 // delete method -------------------------------------------------------

 const deleteUser = async(req,res)=>{
    try{
        let {id} = req.params
        let deleteUser = await UserModel.findByIdAndDelete(id)
        if(deleteUser)
        {
         res.status(200).json({
           status:200,
           mssg:"delete successfully",
           deleteUser
  
         })
        }
    }
    catch(err)
    {
     console.log(err)
     res.status(500).json({
       status:500,
       mssg:"delete successfully",
       err
  
     })
    }
  }


 //  put method ------------------------------------------


 const updateUser = async(req,res)=>{
    try{
        let {id} = req.params
        let userUpdate = await UserModel.findByIdAndUpdate(id,req.body)
        if(userUpdate)
        {
         res.status(200).json({
           status:200,
           mssg:"user update successfully",
           userUpdate
  
         })
        }
    }
    catch(err)
    {
     console.log(err)
     res.status(500).json({
       status:500,
       mssg:"domething is wrong in current function",
       err
  
     })
    }
  }
//login ---------------------------------------

  const login = async(req,res)=>{
    try{
          let {email,password} = req.body
          let users = await UserModel.find({email:email})
          console.log(users);
          if( users.length ==0){
            return res.status(400).json({
                status:400,
                massage:"user not found"
            })
          }
          else{
            bcrypt.compare(req.body.password,users[0].password,(err,result)=>{
                if(result == true)
                {
                  var token = jwt.sign( {data:users[0]} , key);
                    return res.status(200).json({
                        status:200,
                        massage:"login successful",
                          token:token,
                          user:users[0]
                    })  
                }
                else{
                    return res.status(400).json({
                        status:400,
                        massage:"incorrect email and password"
                    })  
                }
            })
          }
    }  
    
    catch(err){
     console.log(err);
    res.status(500).json
    (
       { status:500,
     massage:"server error",
     err:JSON.stringify()})
    }
  }  

module.exports = {addUser,getUser,deleteUser,updateUser,login}