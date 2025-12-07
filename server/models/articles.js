import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, unique: true, index: true }, // URL-friendly identifier
    author: { type: String, required: true }, // Could be a reference to a User model
    category: { type: String, required: true },
    image: { type: String },
    views: { type: Number, default: 0 },
    publishedAt: { type: Date, default: Date.now }, // When article goes live
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);
