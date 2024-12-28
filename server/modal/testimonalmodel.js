import mongoose from "mongoose";

const testimonalSchema = new mongoose.Schema({
    title:{
      type: String 
    },
    description:{
        type: String 
    },
    clientName:{
        type: String 
    },
    profession:{
        type: String
    },
    image:{
        type: String
    }
   
});

export default mongoose.model("Testimonal", testimonalSchema);