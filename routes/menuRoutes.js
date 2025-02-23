const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/menu');



router.post('/',async(req,res)=>{

    try{
       const data = req.body;
       //console.log(data);
       const newMenuItem = new MenuItem(data);
       const savedMenu = await newMenuItem.save();
       console.log('data saved')
       res.status(200).json(savedMenu);
    }
    catch(err){
       console.log(err);
       res.status(500).json({err:'Internal server error'});
    }
})


router.get('/',async(req,res)=>{
    try{
          
        const response = await MenuItem.find();
        console.log("MenuItem Data Fetched Success");
        res.status(200).json(response);
    }
     catch(err){
        console.log('data fetched error');
        res.status(500).json({err:'Internal server error'});
    }
 
});

router.get('/:tasteType',async(req,res)=>{
    try{

        const tasteType = req.params.tasteType;
        if(tasteType == 'sweet' || tasteType=='sour' || tasteType=='spicy')
        {
             const response = await MenuItem.find({taste:tasteType});
             console.log("Successfully fetched this type of food");
             res.status(200).json(response);
        }
         else
         {
            console.log("There is no such type of food");
            res.status(404).json('Wrong type of food');
         }
       
    }
     catch(err){
        console.log('data fetched error');
        res.status(500).json({err:'Internal server error'});
    }
 
});

router.put('/:id',async(req,res)=>{
try{

    const updateId = req.params.id;
    const updateMenuData = req.body;

    const response = await MenuItem.findByIdAndUpdate(updateId,updateMenuData,{
        new:true,
        runValidators:true
    })

    if(!response)
    {
        return res.status(404).json({err:'Menu not found'});
    }
    console.log("Successfully Update MenuItem");
    res.status(200).json(response);

}catch(err)
{
    console.log('data Update error');
    res.status(500).json({err:'Internal server error'});
}

})

router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await MenuItem.findByIdAndDelete(id);
       if(!response)
        {
            console.log("Deleted id Not found");
            return res.status(404).json("Id not found");
        }
        console.log("Delete Successful");
        res.status(200).json("delete success");


    }catch(err){
        console.log('data delete error',err);
    res.status(500).json({error:"Internal Server error"});
    }
})

module.exports = router;
//comment for checking version control
