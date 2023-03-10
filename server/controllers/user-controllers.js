import User from "../schema/user-schema.js";

export const addRegister = async(req, res) => {
    const user = req.body;

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

// export const addLogin = async(req,res) =>{
//     const user = req.body;

//     const loginUser = new User(user);
//     try {
//         await loginUser.save();
//         res.status(201).json(loginUser);
//     } catch (error) {
//         res.status(409).json({message: error.message});
//     }
// }