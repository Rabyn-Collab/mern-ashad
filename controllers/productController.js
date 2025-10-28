import Product from "../models/Product.js";

export const getProducts = (req, res) => {
  return res.status(200).json({ data: 'all products' });
}

export const getProduct = (req, res) => {
  return res.status(200).json({ data: 'single product' });
}

export const createProduct = async (req, res) => {
  try {

    await Product.create({
      title: 'hello jee askjdnasd askjd',
      detail: 'sello jeekjldas dlkjasbd',
      price: 9000
    });
    return res.status(201).json({
      status: 'success',
      data: 'product sucessfully added'
    })

  } catch (err) {
    return res.status(400).json({
      status: 'error',
      data: err.message
    })
  }
};

export const updateProduct = (req, res) => {
  return res.status(200).json({ data: 'all products' });
}

export const deleteProduct = (req, res) => {
  return res.status(200).json({ data: 'all products' });
};