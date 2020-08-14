//ROUTS
const express= require("express");
const router= express.Router();


router.get('/' , (req  , res) =>{
    res.render('index.html' , {title: 'TEST NODEJS'});
});

router.get('/contact' , (req  , res) =>{
   res.render('contact.html' , {title: 'contact pages'});
});

router.get('/about' , (req  , res) =>{
    res.render('about.html' , {title: 'about pages'});
 });

module.exports= router;
