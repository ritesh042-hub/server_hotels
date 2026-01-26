const mongoose=require('mongoose')
const personSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number
        },
        work:{
            type:String
        
        },
        mobile:{
            type:String,
            unique:true
        },
        email:{
            type:String,
            unique:true,
            match: [/.+@.+\..+/, 'Please enter a valid email']
        },
        address:{
            type:String,
            required:true
        },
        Salary:{
            type:Number,
            required:true
        }

    }
)
const Person=mongoose.model('Person',personSchema)
module.exports=Person 