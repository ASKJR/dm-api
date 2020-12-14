const AppError = require('../../common/appError');
const RecipePuppyService = require('../../services/RecipePuppy');

exports.getRecipes = async (req, res, next) => {
  try {
    const { i } = req.query;
    const data = await RecipePuppyService.fetchRecipes(i);
    const recipes = data.map((recipe) => {
      const { title, href, ingredients } = recipe;
      const orederedIngredients = ingredients
        .split(',')
        .sort()
        .map((ing) => ing.trim());
      return {
        title,
        ingredients: orederedIngredients,
        link: href,
      };
    });
    return res.status(200).json({
      keywords: [...i.split(',')],
      recipes,
    });
  } catch (error) {
    return next(new AppError(404, 'fail', error));
  }
};
