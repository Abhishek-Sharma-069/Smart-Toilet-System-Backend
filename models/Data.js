import mongoose from "mongoose";

// Data Schema
const dataSchema = new mongoose.Schema({
  sensorValue: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  location: { type: String }
});

// Model
export const Data = mongoose.model("Data", dataSchema);
