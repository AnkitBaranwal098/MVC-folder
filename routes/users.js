const express = require('express');
const userController = require("../controllers/userController")
const routes = express.Router();

routes.get("/",userController.users)
routes.get("/sign-in",userController.signIn);
routes.get("/sign-up",userController.signUp);
routes.post("/create",userController.createUser);

module.exports = routes;