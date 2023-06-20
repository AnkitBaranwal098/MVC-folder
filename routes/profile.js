const express = require('express');
const profileController = require('../controllers/profileControllers')
const routes = express.Router();

routes.get("/",profileController.profile);

module.exports = routes;