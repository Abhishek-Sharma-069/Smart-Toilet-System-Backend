import mongoose from "mongoose";

// Message Schema
const messageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mobileNumber: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Model
export const Message = mongoose.model("Message", messageSchema);
