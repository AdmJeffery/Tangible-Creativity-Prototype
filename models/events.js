const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  start: {
    type: Date,
    default: "",
    required: true
  },
  // url for recipe web page - unique index
  end: {
    type: Date,
    default: ""
  },
  capacity: {
      type: Number,
      default: 25
  }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
