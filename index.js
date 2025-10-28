import express from 'express';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';
const app = express();
const port = 5000;


mongoose.connect('mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/NewShop').then((val) => {
  app.listen(port, () => {
    console.log('connected and server is running ');
  });
}).catch((err) => {
  console.log(err);
});

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: 'hello jee welcome to Server'
  });
});

app.use(productRoutes);







