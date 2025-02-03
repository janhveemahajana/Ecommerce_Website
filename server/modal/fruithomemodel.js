import mongoose from "mongoose";

const  fruithomeSchema = new mongoose.Schema({
    productname: {
        type: String
    },
    label: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
})

export default mongoose.model("Organic", fruithomeSchema)