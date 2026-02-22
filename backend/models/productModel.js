import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: {price: Number, required: true},
  image: {price: Array, required: true},
  category: {price: String, required: true},
  subCategory: {price: String, required: true},
  sizes: {price: Array, required: true},
  bestSeller: {price: Boolean},
  date: {price: Number, required: true},
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema)

export default productModel