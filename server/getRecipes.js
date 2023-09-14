const axios = require('axios');
require('dotenv').config();

const url = process.env.API_URL
const id = process.env.API_ID
const key = process.env.API_KEY
const uid = process.env.USER_ID

const getRecipes = (obj, callback) => {
  var qp = {}
  if (obj.health) {
    qp = {
      diet: obj.diet,
      health: obj.health,
      calories: obj.calories,
    }
  } else {
    qp = {
      diet: obj.diet,
      calories: obj.calories,
    }
  }

  const q = [];

  for (const key in qp) {
    if (Array.isArray(qp[key])) {
      for (var i = 0; i < qp[key].length; i++) {
        q.push(`${key}=${qp[key][i]}`);
      }
    } else {
      q.push(`${key}=${qp[key]}`);
    }
  }

  const finalUrl = `${url}?type=public&app_id=${id}&app_key=${key}&mealType=Dinner&mealType=Lunch&dishType=Main%20course&random=True&${q.join("&")}`;

  axios.get(finalUrl, {
    headers: {
      "Edamam-Account-User": uid
    }
  }) .then((response) => {
      const data = response.data.hits;
      callback(null, data.splice(0,obj.count));
    })
    .catch((err) => {
      callback(err, null);
    })
}

module.exports.getRecipes = getRecipes;