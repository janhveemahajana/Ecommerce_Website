import mongoose from "mongoose";

const  shopPageSchema = new mongoose.Schema({
    heading: {
        type: String
    },
    title: {
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
    newprice: {
        type: Number
    },
    oldprice: {
        type: Number
    },
})

export default mongoose.model("Shop", shopPageSchema)