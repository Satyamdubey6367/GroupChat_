const massageModel= require("../model/massageModal")

// post method ---------------------------------

const addmassage = async(req,res)=>{
    try{
        console.log(req.body)
        
        
          let massage = new massageModel(req.body)
          let isSave = await massage.save()

          if(isSave)
          {
           return res.status(200).json({
                mssg:"massage added successfully",
                status:200,
                isSave
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

// // get method ---------------------------------

const getmassage=  async(req,res) =>
  
{
   try{
       let  massages = await massageModel.find({})
       if(massages.length != 0)
       {
        return res.status(200).json({
            massg:" massage added  successfully",
            status:500,
            massages
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

// // delete method -------------------------------------------------------

const deletemassage  = async(req,res)=>{
    try{
        let {id} = req.params
        let deletemassage = await userModal.findByIdAndDelete(id)
        if(deletemassage)
        {
         res.status(200).json({
           status:200,
           mssg:"delete successfully",
          deletemassage
  
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

 const updatemassage = async(req,res)=>{
    try{
        let {id} = req.params
        let massageUpdate = await massageModel.findByIdAndUpdate(id,req.body)
        if(massageUpdate)
        {
         res.status(200).json({
           status:200,
           mssg:"user update successfully",
           massageUpdate
  
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

module.exports ={ addmassage,getmassage,deletemassage,updatemassage}