var db = require("../models");
var router = require("express").Router();

  router.post("/newslettersubs", (req , res) => {
    db.NewsletterSubs.create(req.body)
      .then(newsletterSub => {
        res.json(newsletterSub);
      })
      .catch(err => {
        res.json(err);
      });
    
  });

  router.get("/newslettersubs", function (req, res) {
    db.NewsletterSubs.find({}).then(function (dbNewsletterSubs) {
      res.json(dbNewsletterSubs);
      console.log(dbNewsletterSubs)
    });
  })


module.exports =  router;



