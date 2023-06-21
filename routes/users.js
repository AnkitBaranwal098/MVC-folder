const express = require('express');
const userController = require("../controllers/userController")
const routes = express.Router();

routes.get("/",userController.users)
routes.get("/sign-in",userController.signIn);
routes.get("/sign-up",userController.signUp);
routes.get("/profile",userController.profile)
routes.post("/create",userController.createUser);
routes.post("/create-session",userController.createSession);
module.exports = routes;