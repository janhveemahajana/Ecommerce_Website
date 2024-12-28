import mongoose from "mongoose";

const homevegeshopSchema = new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    label: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
});

export default mongoose.model("Vegetableshop", homevegeshopSchema);
