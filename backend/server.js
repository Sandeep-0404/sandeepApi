require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const product_routes = require("./routes/products");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hello this api is made by sandeep ghosh");
});

app.use("/blackcoffer", product_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
