const express = require("express");
const router = express.Router();

const products = require("./productRouter");
const productsList = require("./productListRouter");
const home = require("./homeRouter");
const homeFaker = require("./homeFakerRouter");
const productosFaker = require("./productosFakerRouter");
const login = require("./loginRouter");
const logout = require("./logoutRouter");

//middlewares
router.use("/productos", products);
router.use("/lista-productos", productsList);
router.use("/", home);
router.use("/login", login);
router.use("/logout", logout);
router.use("/api/productos-test", homeFaker);
router.use("/api/faker-list", productosFaker);


module.exports = router;
