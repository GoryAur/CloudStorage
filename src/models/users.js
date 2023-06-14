import mongoose from "mongoose";

const UsersScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    role: {
      type: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userModel = mongoose.model("users", UsersScheme);
