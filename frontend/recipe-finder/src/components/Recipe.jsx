/* eslint-disable react/prop-types */
import styled from "styled-components";

const RecipeImage = styled.img`
  width: 20%;
  height: 50%;
`;
const RecipeDiv = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
  width: 1000px;
`;

function Recipe({ recipe }) {
  console.log("zabour om recette ya zebi: ", recipe);
  if (recipe?.id === undefined)
    return (
      <h2>
        Got a recipe in mind ? <br /> Search our large collection of delicious
        recipes
      </h2>
    );
  return (
    <RecipeDiv>
      <h1>{recipe.title}</h1>
      <RecipeImage src={recipe.image} alt="" />
    </RecipeDiv>
  );
}

export default Recipe;
