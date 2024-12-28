import mongoose from "mongoose";
const exoticfruitSchema = new mongoose.Schema({
     image:{
        type: String,
    },
    heading1:{
        type: String,
    },
    heading2:{
        type: String,
    },
    heading3:{
        type: String,
    },
})

export default mongoose.model("Exoticfruit", exoticfruitSchema);