const express =require ("express")
require("./db/conn");

 const router=require("./routers/users");
const app= express();
var cors = require('cors')
app.use(express.json());
const fetch = require("node-fetch");
app.use(cors(),router);
app.use(cors());

const  port =process.env.PORT || 8080;


app.listen(port,()=>{
    console.log(`connection establised on ${port}`);
})