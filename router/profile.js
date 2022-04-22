const express=require("express")
const router=express.Router()
const  profileModule=require("../module/profile")

router.get("/", profileModule.list);

module.exports=router;