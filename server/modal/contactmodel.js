import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    title: {
        type: String
    },
    mail: {
        type: String
    },
    address: {
        type: String
    },
    description: {
        type: String
    }
});

export default mongoose.model("Contact", contactSchema);
