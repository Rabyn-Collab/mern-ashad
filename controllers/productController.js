import Product from "../models/Product.js";
import fs from 'fs';
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      status: 'success',
      data: products
    });
  } catch (err) {
    return res.status(400).json({
      status: 'Error',
      data: err.message
    });
  }
}

export const getProduct = (req, res) => {
  return res.status(200).json({ data: 'single product' });
}

export const createProduct = async (req, res) => {
  const { title, price, detail, image, category, brand } = req.body ?? {};


  try {
    await Product.create({
      title,
      price,
      detail,
      image: req.imagePath,
      category,
      brand
    });
    return res.status(201).json({
      status: 'Success',
      data: 'product added successfully'
    });
  } catch (err) {

    fs.unlink(`./uploads/${req.imagePath}`, (error) => {
      return res.status(400).json({
        status: 'Error',
        data: err.message
      });
    })



  }

};

export const updateProduct = (req, res) => {
  return res.status(200).json({ data: 'all products' });
}

export const deleteProduct = (req, res) => {
  return res.status(200).json({ data: 'all products' });
};