const express = require('express');
const routes = express.Router();

const homeController = require("../controllers/homeController")

const userRoutes = require('./users')
// const profileRoutes = require('./profile')

console.log("Router loaded successfully.")

routes.get("/",homeController.home)
routes.use("/users",userRoutes);
// routes.use("/profile",profileRoutes)

module.exports = routes;