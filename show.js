const mongoose=require('mongoose')
const { stringify } = require('nodemon/lib/utils')

const mySchema=new mongoose.Schema({
    name:String,
    Religion:String,
    age:Number,
    town:String,
    hobies:String
})
 exports.model=mongoose('users',mySchema)