require("dotenv").config();
const URL = process.env.URL || "https://api.spoonacular.com/recipes";
const API_KEY = process.env.API_KEY || "71236e9887274d7196baa9a06a7f1660";
const axios = require("axios");
async function getRandomRecipe() {
  try {
    const response = await axios.get(`${URL}/random`, {
      params: {
        apiKey: API_KEY,
        number: 1,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { getRandomRecipe };
