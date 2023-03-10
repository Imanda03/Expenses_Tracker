import mongoose from "mongoose";

const Connection = async() =>{
    const URL = "mongodb://localhost:27017/expensesTracker";
    try {
        await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser: true});
        console.log("Database has been connected..");
    } catch (error) {
        console.log("Error occured during Database Connection", error);
    }
}

export default Connection;