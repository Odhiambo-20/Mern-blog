import mongoose from "mongoose";
import { type } from "os";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw08nEtPAJNqJ8vXyBNFi1Dt&ust=1727261740013000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjWvsa124gDFQAAAAAdAAAAABAE",

    }
    

},{timestamps:true}
);
const User=mongoose.model('User',userSchema);

export default User;