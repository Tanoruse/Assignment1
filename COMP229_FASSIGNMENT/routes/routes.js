var express = require("express");
var router = express.Router();



/* GET home page. */
router.get("/", function(req,res,next){

    res.render("index",{title: "Home"})
});

/* GET About page. */
router.get("/about", function(req,res,next){

    res.render("About",{title: "about"})
});

/* GET Products page. */
router.get("/products", function(req,res,next){

    res.render("products",{title: "products"})
});

/* GET Contact page. */
router.get("/contact", function(req,res,next){

    res.render("ContactMe",{title: "contact"})
});

/* GET Service page. */
router.get("/services", function(req,res,next){

    res.render("Service",{title: "contact"})
});

module.exports = router;
