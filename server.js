const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// AUTH0 Packages ====================================
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
// ===================================================

const PORT = process.env.PORT || 3001;
const app = express();
//const NewsletterSub = require("./models/newsletterSubs.js")
const apiRoutes = require("./routes/api.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://RB2199:Abc123@cluster0.moseu.mongodb.net/TangibleCreativity?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Use apiRoutes
//
app.use("/api", apiRoutes);


// ========================================================= Cade's AUTH0 code
// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-14haqfy3.us.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'ttps://dev-14haqfy3.us.auth0.com/api/v2/',
  issuer: `https://dev-14haqfy3.us.auth0.com/`,
  algorithms: ['RS256']
});
// ===========================================================================






// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
