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

// TODO Seed One item
// const p = new Product({
//   name: 'Ruby Grapfruit',
//   price: 1.99,
//   category:'fruit'
// })

// p.save().then(p => {
//   console.log(p)
// }).catch(e => {
//   console.log(e)
// })

// TODO Seed many items
const seedProducts = [
  {
  name: 'Fairy Eggplant',
  price: 1.00,
  category:'vagetable'
  },
  {
  name: 'Organic Goddess Melon',
  price: 4.99,
  category:'fruit'
  },
  {
  name: 'Organuc mini seedless Watermelon',
  price: 3.99,
  category:'fruit'
  },
  {
    name: 'Organic Salery',
  price: 1.50,
  category:'vagetable'
  }
]


Product.insertMany(seedProducts)
  .then(res => {
  console.log(res)
  }).catch(e => {
  console.log(e)
})