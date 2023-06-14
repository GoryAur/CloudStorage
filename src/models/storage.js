import mongoose from 'mongoose'

const StorageScheme = new mongoose.Schema(
  {
    filename: {
      type: String,
    },
    url: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const storageModel = mongoose.model("storage", StorageScheme);
