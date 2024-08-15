import mongoose from 'mongoose';


const dbConnection=async()=>{
    const DB_URI = "mongodb+srv://ramanjeet:test123@job-portal.ynvzo.mongodb.net/";

    try{
        await mongoose.connect(DB_URI);
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error while connecting with database", error.message);
    }
}

export default dbConnection;