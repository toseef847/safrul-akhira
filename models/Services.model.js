const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  url: { type: String, trim: true, default: "" },
  alt: { type: String, default: "" },
});

const serviceSchema = new Schema({
  name: { type: String, required: true },
  sku: { type: String, unique: true, trim: true, default: "" },
  shortDescription: String,
  longDescription: String,
  vendor: { type: Schema.Types.ObjectId, ref: "User" },
  featuredImage: imageSchema,
  images: [imageSchema],
  isDeleted: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", serviceSchema);
