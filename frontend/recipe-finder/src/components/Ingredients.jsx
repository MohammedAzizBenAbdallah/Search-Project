/* eslint-disable no-unused-vars */

import styled from "styled-components";
import Recipe from "./Recipe";

/* eslint-disable react/prop-types */
const Recipes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function Ingredients({ recipes }) {
  const data = recipes != {} ? recipes : [];
  console.log(data);
  return (
    <Recipes>
      {data.map((recipe, index) => {
        return <Recipe key={index} recipe={recipe} />;
      })}
    </Recipes>
  );
}

export default Ingredients;
