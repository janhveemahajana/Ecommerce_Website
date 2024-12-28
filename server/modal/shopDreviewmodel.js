import mongoose from "mongoose";

const shopdreviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensure name is provided
  },
  email: {
    type: String,
    required: true, // Ensure email is provided
  },
  review: {
    type: String,
    required: true, // Ensure review is provided
  },
});

export default mongoose.model("ShopDReview", shopdreviewSchema);
