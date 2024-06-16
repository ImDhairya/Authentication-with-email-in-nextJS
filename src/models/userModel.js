import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Please Provide the username"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please Provide email"],
    },
    password: {
      type: String,
      required: [true, "Please Provide the password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {timestamps: true}
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
