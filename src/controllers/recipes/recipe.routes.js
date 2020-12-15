const { Router } = require('express');
const RecipeController = require('./recipe.controller');
const { ingredientsCheck } = require('./recipe.validation');

const routes = Router();

routes.get('/', ingredientsCheck, RecipeController.getRecipes);

module.exports = routes;
