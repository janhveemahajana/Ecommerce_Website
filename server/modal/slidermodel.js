import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
    image:{
        type: String 
    },
    label:{
        type: String   
    }
   
});

export default mongoose.model("Slider", sliderSchema);