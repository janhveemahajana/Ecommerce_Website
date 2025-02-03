import mongoose from "mongoose";

const contactformSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensure name is provided
  },
  email: {
    type: String,
    required: true, // Ensure email is provided
  },
  message: {
    type: String,
    required: true, // Ensure message is provided
  },
});

export default mongoose.model("ContactForm", contactformSchema);
