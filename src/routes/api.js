var db = require("../models");

// module.exports = function (app) {

//   app.post("/submit", ({ body }, res) => {
//     NewsletterSub.create(body)
//       .then(newsletterSub => {
//         res.json(newsletterSub);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

//   app.get("/api/newslettersubs", function (req, res) {
//     db.NewsletterSub.find({}).then(function (dbNewsletterSubs) {
//       res.json(dbNewsletterSubs);
//     });
//   })
// };