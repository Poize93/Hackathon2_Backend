const express=require("express")
const router=express.Router()
const  companyModule=require("../module/company")

router.get("/", companyModule.list);

module.exports=router;