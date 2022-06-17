const mongoose = require('mongoose');

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

const storageModel = mongoose.model("storage", StorageScheme);

module.exports = storageModel
