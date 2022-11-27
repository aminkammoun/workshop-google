import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    product_id: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export const Category = mongoose.model("Category", categorySchema);
