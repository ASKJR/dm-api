const { validationResult } = require('express-validator');
const AppError = require('../../common/appError');
const RecipePuppyService = require('../../services/RecipePuppy');
const GiphyService = require('../../services/Giphy');

exports.getRecipes = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new AppError(422, 'fail', { errors: errors.array() }));
  }
  try {
    const { i } = req.query;
    const ingredientsList = i.split(',');

    if (ingredientsList.length > 3) {
      return next(
        new AppError(404, 'fail', 'Número máximo de ingredientes(3) excedido.')
      );
    }

    const data = await RecipePuppyService.fetchRecipes(i);

    const recipesToReturn = data.map(async (recipe) => {
      const { title, href, ingredients } = recipe;
      const orderIngredients = ingredients.split(',').map((ing) => ing.trim());
      orderIngredients.sort();

      const gif = await GiphyService.getGif(title);
      return {
        title,
        ingredients: orderIngredients,
        link: href,
        gif,
      };
    });

    const recipes = await Promise.all(recipesToReturn);

    return res.status(200).json({
      keywords: [...ingredientsList],
      recipes,
    });
  } catch (error) {
    return next(
      new AppError(404, 'fail', 'Não foi possível listar as receitas.')
    );
  }
};
