import mongoose from "mongoose";

const  featuredproSchema = new mongoose.Schema({
    productname: {
        type: String
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    newprice: {
        type: Number
    },
    oldprice: {
        type: Number
    },
})

export default mongoose.model("FeaturedProduct", featuredproSchema)