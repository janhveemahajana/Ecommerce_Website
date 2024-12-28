import mongoose from "mongoose";
const ourdealsSchema = new mongoose.Schema({
    heading:{
        type: String,
    },
    image:{
        type: String,
    },
    heading1:{
        type: String,
    },
    heading2:{
        type: String,
    },
})

export default mongoose.model("OurDeals", ourdealsSchema);