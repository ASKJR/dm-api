const express = require('express');

const router = express.Router();

const recipes = require('../controllers/recipes/recipe.routes');

router.use('/recipes', recipes);

module.exports = router;
