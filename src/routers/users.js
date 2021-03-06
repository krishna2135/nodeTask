 const express = require("express");
 const router = new express.Router();
 const User = require("../modals/users");
 var cors = require('cors')
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
router.get("/users/:id",cors(),async(req,res)=>{
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


router.post("/login",async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        console.log(email,password)
        const getUser=await User.findOne({ email: email, password: password });
        if(getUser){
            res.send({
                message:"user logedin",
                status:1,
                userId:getUser._id})
        }else {
            res.send({
                message:"user not fond please check your emal and password",
                status:0,
                })
        }
        
    }catch(e){
res.status(500).send(e);
    }
})

 module.exports = router;