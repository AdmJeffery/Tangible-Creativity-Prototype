const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: "",
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  }
});

const NewsletterSub = mongoose.model("NewsletterSub",  newsletterSchema);

module.exports = NewsletterSub;