const mongoose = require('./connection')//import mongoose from connection.js

const {Schema, model } = mongoose;

const tshirtSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  new: Boolean
});

const Tshirt = model("Tshirt", tshirtSchema);


module.exports = Tshirt