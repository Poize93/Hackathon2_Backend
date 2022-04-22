// const mongo=require('../shared/connect')
// const bcrypt=require("bcrypt")
// const jwt=require('jsonwebtoken')



// exports.signup=async(req,res,next)=>{
//     console.log("Checking my Sign Up function");
//     // //checking for UserName
//     // const existUser=await mongo.selectedDB('user').findObe({email:req.body.email})
//     // if(existUser) return res.status(500).send({msg:"UserName already Exists"})

//     // ///Encrypting the  password /
//     // const salt=await bcrypt.genSalt(5); 
//     // req.body.password=await bcrypt.hash(req.body.password, salt)

//     // var response=await mongo.selectedDB.collection("user").insertOne(req.body)
//     // res.send(response)
// }