const AppError = require('../../common/appError');
const RecipePuppyService = require('../../services/RecipePuppy');
const GiphyService = require('../../services/Giphy');

exports.getRecipes = async (req, res, next) => {
  try {
    const { i } = req.query;
    const data = await RecipePuppyService.fetchRecipes(i);

    const recipesToReturn = data.map(async (recipe) => {
      const { title, href, ingredients } = recipe;
      const orederedIngredients = ingredients
        .split(',')
        .sort()
        .map((ing) => ing.trim());
      const gif = await GiphyService.getGif(title);
      return {
        title,
        ingredients: orederedIngredients,
        link: href,
        gif,
      };
    });

    const recipes = await Promise.all(recipesToReturn);

    return res.status(200).json({
      keywords: [...i.split(',')],
      recipes,
    });
  } catch (error) {
    return next(new AppError(404, 'fail', error));
  }
};
