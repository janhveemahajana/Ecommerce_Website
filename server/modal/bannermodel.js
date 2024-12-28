import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
    heading: {
        type: String
    },
    image: {
        type: String
    }
});

export default mongoose.model("Banner", BannerSchema);
