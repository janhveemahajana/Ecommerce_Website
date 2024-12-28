import mongoose from "mongoose";

const contactnewSchema = new mongoose.Schema({
    address: {
        type: String
    },
    mail: {
        type: String
    },
    telephone: {
        type: Number
    }
});

export default mongoose.model("ContactData", contactnewSchema);
