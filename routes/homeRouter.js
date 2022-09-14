const { Router } = require("express");
const home = Router();

//importo el controller
const Contenedor = require("../controller/products.controller")

home.get("/", (req, res) => { 

  if (req.session.user) {
    res.render('home', {user: req.session.user});
  }
  else {
    res.render('login');
  }  
 
});



module.exports = home;