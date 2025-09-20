
import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String , required:true},
}

,{timestamps:true})