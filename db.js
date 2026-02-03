const mongoose=require('mongoose');
//const mongoooseUrl='mongodb://localhost:27017/hotels';
require('dotenv').config();
const mongoUrl=process.env.MONGO_URL;
mongoose.connect(mongoUrl);
const db=mongoose.connection;
db.on('connected',()=>
{
    console.log('Connected to the mongodb Server');
})
db.on('error',(err)=>{
    console.log('Error occured',err);
})
db.on('disconnected',()=>{
    console.log("Database Disconnected");
})
module.exports=db;