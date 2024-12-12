import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    productname:{
      type: String 
    },
    image:{
        type: String 
    },
    price:{
        type: Number   
    }
   
});

export default mongoose.model("Cart", cartSchema);