const axios = require('axios');
require('dotenv');

const getRecipes = (obj, callback) => {
  axios.get(process.env.API_URL, {
    params: {
      app_id: process.env.API_ID,
      app_key: process.env.API_KEY,
      random: true,
      diet: obj.diet,
      health: obj.health,
      mealType: ['Lunch', 'Dinner'],
      calories: obj.calories,
      type: 'public'
    },
    headers: {
      "Edamam-Account-User": process.env.USER_ID
    }
  })
    .then((response) => {
      console.log('Fetched Recipes');
      callback(null, response.hits);
    })
    .catch((err) => {
      callback(err, null);
    })
}

module.exports.getRecipes = getRecipes;