import mongoose from "mongoose";

const  dashboardSchema = new mongoose.Schema({
    heading: {
        type: String
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    weight: {
        type: Number
    },
    origin: {
        type: String
    },
    quality: {
        type: String
    },
    check: {
        type: String
    },
    minweight: {
        type: Number
    },
})

export default mongoose.model("ShopDdashboard", dashboardSchema)