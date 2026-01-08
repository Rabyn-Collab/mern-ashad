import Product from "../models/Product.js";
import Review from "../models/Review.js"



export const getReviews = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await Review.find({ product: id }).populate([
      {
        path: 'user',
        model: 'User',
        select: '-password'
      }
    ]);
    return res.status(200).json(reviews);
  } catch (err) {
    return res.status(500).json({ status: 'error', message: err.message });
  }
}


export const createReview = async (req, res) => {
  const { rating, comment, product } = req.body;
  try {



    await Review.create({
      rating,
      comment,
      user: req.userId,
      product
    });

    // const product = await Product.findById(product);

    // const totalRating = product.ratings.reduce((acc, item) => acc + item.rating, 0);
    // const avgRating = totalRating / product.ratings.length;
    // product.rating = avgRating;
    // await product.save();
    return res.status(201).json({ status: 'success', message: 'review created successfully' });
  } catch (err) {
    return res.status(500).json({ status: 'error', message: err.message });
  }

}