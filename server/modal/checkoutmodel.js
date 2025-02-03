import mongoose from "mongoose";

const checkoutFSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true, // Ensure name is provided
  },
  lname: {
    type: String,
    required: true, // Ensure name is provided
  },
  address: {
    type: String,
    required: true, // Ensure name is provided
  },
  city: {
    type: String,
    required: true, // Ensure name is provided
  },
  postcode: {
    type: Number,
    required: true, // Ensure name is provided
  },
  mobile: {
    type: Number,
    required: true, // Ensure name is provided
  },
  email: {
    type: String,
    required: true, // Ensure email is provided
  },
  notes: {
    type: String,
    required: true, // Ensure review is provided
  },
});

export default mongoose.model("Checkout", checkoutFSchema);
