const mongoose = require("mongoose")

//mongodb+srv://krishna:EKsFeABdFWtCKgWc@cluster0.zytbo.mongodb.net/krishnamongo?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://krishna:EKsFeABdFWtCKgWc@cluster0.zytbo.mongodb.net/krishnamongo?retryWrites=true&w=majority',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("connected with db");


}).catch((e)=>{
    console.log("not connected")
})











//mongodb+srv://krishna:EKsFeABdFWtCKgWc@cluster0.zytbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//EKsFeABdFWtCKgWc