const mongoose = require('mongoose');

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

const ipModel = mongoose.model("ipUsers", IpScheme);

module.exports = ipModel
