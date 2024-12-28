
import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
    headingone: {
        type: String
    },
    headingtwo: {
        type: String
    }
});

export default mongoose.model("Hero", HeroSchema);
