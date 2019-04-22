var express = require('express');
var router = express.Router();

// Get Page Model
var Page = require('../models/page'); 

// Get /
router.get('/', function(req, res){

   Page.find({slug:''}, function (err, page, products) {
        if(err)
            console.log(err);

            res.render('index', {
                title: 'Home',
                //p: p.products
                products : products,
                //products: p
                //products: products.page
                content:page
                //content:page.content
                
            });
        
    });
});

router.get('/contact', function(req,res) {
    res.render('pages/contact');
});

router.get('/about', function(req,res) {
    res.render('pages/about');
});
   
router.get('/buynow', function(req,res) {
    res.render('buynow');
});


module.exports = router;