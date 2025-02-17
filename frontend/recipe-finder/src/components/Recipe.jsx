/* eslint-disable react/prop-types */
import styled from "styled-components";

const RecipeImage = styled.img`
  width: 20%;
  height: 50%;
`;
const RecipeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Recipe({ recipe }) {
  return (
    <RecipeDiv>
      <h1>{recipe.title}</h1>
      <RecipeImage src={recipe.image} alt="" />
    </RecipeDiv>
  );
}

export default Recipe;
