import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      validate: (v: any) => Array.isArray(v) && v.length > 0,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    quantity: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Categories",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    addedBy: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Products ||
  mongoose.model("Products", productSchema);
