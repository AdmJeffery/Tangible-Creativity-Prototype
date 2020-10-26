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

const NewsletterSubs = mongoose.model("subs",  newsletterSchema);

module.exports = NewsletterSubs;