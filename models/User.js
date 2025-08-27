import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  address: { type: String },
  pic: { type: String }, // Cloudinary URL instead of binary
  socialLink: {
    type: {
      platform: { type: String }, // e.g., facebook, twitter
      url: { type: String }
    },
    userType: {type:String}
  }
}, { timestamps: true });

// Model
export const User = mongoose.model("User", userSchema);
