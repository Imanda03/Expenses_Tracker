import User from "../schema/user-schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const addRegister = async(req, res) => {
    // console.log("here")
    try {
    const {fullName, userName, password, rePassword} = req.body;

        const checkUser = User.findOne({"userName" :userName});

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const rePasswordHash = await bcrypt.hash(rePassword, salt);
    const newUser = new User({
        fullName,
        userName,
        password: passwordHash,
        rePassword: rePasswordHash
    });

    if(checkUser.userName){
        // console.log(checkUser);
        return res.status(500).json("User Already exist");
    }else{
        await newUser.save();
        res.status(201).json(newUser);
    }
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const addLogin = async(req,res) =>{
    try {

        // console.log(req)
        const {userName,password} = req.body;
        // console.log(userName, password)
        let user = await User.findOne({"userName":userName});
        if(!user) return res.status(400).json({message: "User does not exit."});
        // console.log("here");
        // console.log(user)
        // console.log(password)
        // console.log(user.password)
        const isMatch = await bcrypt.compare(password, user.password);
        // console.log("here");
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});
        
        console.log("jwt");
        const token = jwt.sign({id: user._id}, "process.env.JWT_SECRET");
        console.log("here");
        delete user.password;
        res.status(200).json({token,user});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}