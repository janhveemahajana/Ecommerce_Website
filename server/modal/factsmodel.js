import mongoose from "mongoose";

const FactSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
});

const Service = mongoose.model("Facts", FactSchema);

export default Service;
