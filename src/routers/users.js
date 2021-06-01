 const express = require("express");
 const router = new express.Router();
 const User = require("../modals/users");

 //create user
 router.post("/users",async(req,res)=>{
    try{
        const addingUsersRecords=new User(req.body)
        console.log(req.body);
        const insertUsers=await addingUsersRecords.save();
        res.status(201).send(insertUsers)
    }catch(e){
res.status(400).send(e);
    }
})
//get all user
router.get("/users",async(req,res)=>{
    try{
      const getUsers=await User.find({});
        res.status(200).send(getUsers)
    }catch(e){
res.status(400).send(e);
    }
})
// get one user
router.get("/users/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
      const getUser=await User.findById({_id});
        res.send(getUser)
    }catch(e){
res.status(400).send(e);
    }
})

router.patch("/users/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
      const getUser=await User.findByIdAndUpdate(_id,req.body,{
          new:true
      });
        res.send(getUser)
    }catch(e){
res.status(500).send(e);
    }
})

 module.exports = router;