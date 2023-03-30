const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const myData = await Product.find({});
  res.status(200).send(myData);
};

module.exports = getAllProducts;
