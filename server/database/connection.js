const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        //conn string
        const con=await mongoose.connect(process.env.MONGO_CONNECT,{
           

        })
        console.log(`mongoDB connected: ${con.connection.host}`);

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB