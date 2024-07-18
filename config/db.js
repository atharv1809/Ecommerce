import mongoose from 'mongoose';

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Mongodb ${conn.connection.host}`.bgMagenta.white);
    } catch(error){
        console.log(`Error in MongoBD connection ${error}`.bgRed.white);
    }
}

export default connectDB;