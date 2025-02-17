// const express = require("express");
// const fs = require("fs");
// require("dotenv").config();
// const axios = require("axios");
// const cors = require("cors");
// const { getRandomRecipe } = require("./Services/recipesApi");

// const app = express();
// const PORT = process.env.PORT || 3000;

// const replaceTemplate = (temp, recipe) => {
//   const data = recipe.recipes[0];
//   console.log(data);
//   let ingredients = "";
//   let outPut = temp.replace(/{%RECIPE_TITLE%}/g, data.title);
//   data.extendedIngredients.map((ingredient) => {
//     ingredients += `<li> <p> ${ingredient.amount} </p> <p> ${ingredient.unit} </p><p >${ingredient.name} </p></li>`;
//   });

//   outPut = outPut.replace(/{%INGREDIENTS%}/g, ingredients);
//   outPut = outPut.replace(/{%GUIDE%}/g, data.instructions);
//   return outPut;
// };

// const homePage = fs.readFileSync(`${__dirname}/pages/home.html`, "utf-8");
// const randomRecipeTemplate = fs.readFileSync(
//   `${__dirname}/pages/randomRecipe.html`,
//   "utf-8"
// );

// app.use(cors());

// app.use(express.json());

// const url = process.env.URL;

// const key = process.env.API_KEY;
// app.get("/", async (req, res) => {
//   res.end(homePage);
// });
// app.get("/random", async (req, res) => {
//   try {
//     const result = await getRandomRecipe();
//     const recipePage = replaceTemplate(randomRecipeTemplate, result);
//     // res.json(result);
//     res.end(recipePage);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`);
// });

const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const SPOONACULAR_API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

app.use(express.json());

// Search for recipe details by name
app.get("/recipe", async (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: "Recipe name is required" });

  try {
    const searchResponse = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        query: name,
        apiKey: SPOONACULAR_API_KEY,
        limit: 1,
      },
    });
    if (searchResponse.data.results.length === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const recipeId = searchResponse.data.results[0].id;
    const recipeDetails = await axios.get(
      `${BASE_URL}/${recipeId}/information`,
      {
        params: { apiKey: SPOONACULAR_API_KEY },
      }
    );

    res.json(recipeDetails.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipe details" });
  }
});

// Search for recipes by ingredients
app.get("/recipes-by-ingredients", async (req, res) => {
  const { ingredients } = req.query;
  if (!ingredients)
    return res.status(400).json({ error: "Ingredients are required" });

  try {
    const response = await axios.get(`${BASE_URL}/findByIngredients`, {
      params: {
        ingredients,
        apiKey: SPOONACULAR_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipes" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
