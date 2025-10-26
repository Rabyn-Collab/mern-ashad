export const getProducts = (req, res) => {
  return res.status(200).json({ data: 'all products' });
}

export const getProduct = (req, res) => {
  return res.status(200).json({ data: 'single product' });
}

export const createProduct = (req, res) => {
  return res.status(200).json({});
};

export const updateProduct = (req, res) => {
  return res.status(200).json({ data: 'all products' });
}

export const deleteProduct = (req, res) => {
  return res.status(200).json({ data: 'all products' });
};