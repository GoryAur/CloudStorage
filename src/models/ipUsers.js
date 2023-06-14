import mongoose from 'mongoose'

const IpScheme = new mongoose.Schema(
  {
    ip: {
      type: String,
      unique: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ipModel = mongoose.model("ipUsers", IpScheme);
