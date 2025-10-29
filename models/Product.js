import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['food', 'clothes', 'tech', 'jewelley'],
    required: true
  },
  brand: {
    type: String,
    enum: ['addidas', 'samsung', 'tanishq', 'kfc', 'iphone'],
    required: true
  },
  // eggs: {
  //   type: Number,
  //   min: [6, 'Too few eggs'],
  //   max: 12
  // },
  rating: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });


const Product = mongoose.model('Product', productSchema);

export default Product;