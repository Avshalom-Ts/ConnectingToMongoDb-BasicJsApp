const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/shopApp',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));




app.get('/products', async (req, res) => {
  const products = await Product.find({})
  // console.log(products)
  // res.send('All products will be here');
  res.render('products/index', { products });
})

app.get('/products/new', (req, res) => {
  res.render('products/new');
})

app.post('/products', async (req, res) => {
  // console.log(req.body);
  const newProduct = new Product(req.body);
  await newProduct.save();
  // console.log(newProduct);
  // res.send('Making your product!');
  res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  // console.log(product);
  // res.send('details page');
  res.render('products/show', { product });
})

app.listen(3000, () => {
  console.log("App is listening on port 3000!");
})