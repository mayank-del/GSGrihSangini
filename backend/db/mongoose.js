const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/GrihSangini',{})
const connectToDatabase=()=>{console.log("Connected")}
module.exports=connectToDatabase

