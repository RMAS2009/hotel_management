const express = require('express');
const router = express.Router();

const Person = require('./../models/person');


router.post('/',async(req,res)=>{

    try{
       const data = req.body;
       //console.log(data);
       const newPerson = new Person(data);
       const savedPerson = await newPerson.save();
       console.log('data saved')
       res.status(200).json(savedPerson);
    }
    catch(err){
       console.log(err);
       res.status(500).json({err:'Internal server error'});
    }
})

router.get('/',async(req,res)=>{
    try{
         
         const data = await Person.find();
         console.log('data fetched');
         res.status(200).json(data);
    }
     catch(err){
        console.log('data fetched error');
        res.status(500).json({err:'Internal server error'});
    }
 
});

router.get('/:workRole',async(req,res)=>{
    try{
        
        const workType = req.params.workRole;
          const response = await Person.find({work:workType});
          console.log("Data Fetch Success");
          res.status(200).json(response);
        }
    catch(err){
        console.log("Data Fetched error");
        res.status(404).json({err:'Internal server error'})
    }
})

router.put('/:updateId',async (req,res)=>{
      try{

        const personId = req.params.updateId;
         const updatePersonData = req.body;
         const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true
         })  

         if(!response)
         {
            console.log("id not found");
             res.status(404).json({error:'Person not found'});
         }
         console.log("data Update Successful")
         res.status(200).json("Successful");
      }
      catch(err)
      {
        console.log("internal server error");
        res.status(500).json({err:"Internal server error"});
      }
})

router.delete('/:id',async(req,res)=>{

    try{

        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if(!response)
        {
            console.log("id not found");
            res.status(404).json({error:'Person not found'});
        }

        console.log("data delete Successful")
         res.status(200).json("delete Successful");

    } catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}
)
module.exports = router;