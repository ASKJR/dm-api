const axios = require('axios');

const API_BASE_URL = 'http://www.recipepuppy.com/api/';

exports.fetchRecipes = async (ingredients) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/?i=${ingredients}`);
    const recipes = data.results;
    return recipes;
  } catch (error) {
    return error;
  }
};
