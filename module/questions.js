const mongo=require('../shared/connect')

module.exports.list= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('questions').find({}).toArray();
        res.send(data)
        console.log(data ,"Get Module")
      //  console.log(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports.ask= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('questions').insertOne({...req.body});
        res.send(data)
        console.log(data ,"Get Module")
      //  console.log(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}