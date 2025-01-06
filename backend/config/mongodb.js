const mongoose=require("mongoose")
const connectdb=async ()=>{
    let mongodconnectbstring="mongodb+srv://abdulbahad:abdulfahad@cluster.jmzoa.mongodb.net/ecomdata";
    await mongoose.connect(mongodconnectbstring)


}
module.exports=connectdb;