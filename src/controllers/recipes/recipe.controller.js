const AppError = require('../../common/appError');

exports.getRecipes = async (req, res, next) => {
  try {
    return res.status(200).json({
      status: 'success',
      data: {
        recipes: 'recipes',
      },
    });
  } catch (error) {
    return next(
      new AppError(404, 'fail', 'Não foi possível carregar as receitas.')
    );
  }
};
