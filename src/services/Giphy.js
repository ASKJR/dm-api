const axios = require('axios');

const API_BASE_URL = 'https://api.giphy.com/v1/gifs';

exports.getGif = async (search) => {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}`
    );
    const gif = data.data[0].images.original.url;
    return gif;
  } catch (error) {
    return error;
  }
};
