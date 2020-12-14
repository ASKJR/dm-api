const { Router } = require('express');
const RecipeController = require('./recipe.controller');

const routes = Router();

routes.get('/', RecipeController.getRecipes);

module.exports = routes;
