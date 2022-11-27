import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    category_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    price: Number,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export const Product = mongoose.model("Product", productSchema);
