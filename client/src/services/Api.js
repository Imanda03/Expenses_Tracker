import axios from "axios";
const URL = "http://localhost:8080";

export const addRegister = async(data)=>{
    try {
        return await axios.post(`${URL}/auth/register`,data);
    } catch (error) {
        console.log("Error during calling Register Api");
    }
}

export const addLogin = async(data)=>{
    try {
        return await axios.post(`${URL}/auth/login`,data);
    } catch (error) {
        console.log("Error during calling Login Api");
    }
}