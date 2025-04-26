/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Spinner from "../ui/Spinner";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
function AppContent({ isLoading, recipe, recipes, type }) {
  useEffect(
    function () {
      console.log(isLoading);
      if (type === "name") console.log(recipe);
      else console.log(recipes);
    },
    [isLoading]
  );
  if (isLoading) return <Spinner />;
  if (type === "name" && recipe != {}) return <Recipe recipe={recipe} />;
  if (type === "ingredients") return <Ingredients recipes={recipes} />;
}

export default AppContent;
