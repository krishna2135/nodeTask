const express=require("express");
const  mongoose  = require("mongoose");
const validator = require('validator');

const userSchema= new mongoose.Schema({
firstName:{
    type:String,
    required:true,
    trim:true,
},
lastName:{
    type:String,
    required:true,
    trim:true,
},
phone:{
    type:Number,
    required:true,
    trim:true,
},
password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
        if (value.toLowerCase().includes('password')) {
            throw new Error('Password cannot contain "password"')
        }
    }
},

email: {
    type: String,
    
    required: true,
    trim: true,
    lowercase: true,
    index:{
        unique: true,
    },
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid')
        }
    }
},

study:{
    type:String,
    trim:true,
},
})

const User= new mongoose.model("User",userSchema)
module.exports=User; 
