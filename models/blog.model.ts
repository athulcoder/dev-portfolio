
import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images:[{type:String, default:""}]

},


    { timestamps: true });



