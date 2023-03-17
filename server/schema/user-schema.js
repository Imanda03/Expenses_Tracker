import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        min: 4,
        max: 50
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 50 
    },
    password:{
        type: String,
        required: true,
        min: 4,
        max: 50 
    },
    rePassword:{
        type: String,
        required: true,
        min: 4,
        max: 50 
    }
});

const User = mongoose.model("User", userSchema);
export default User;