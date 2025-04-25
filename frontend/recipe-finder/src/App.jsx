/* eslint-disable no-unused-vars */
import AppContent from "./components/AppContent";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./index.css";
import { fetchSpoonacular } from "./services/apiSpoonacular";
const StyledApp = styled.div`
  gap: 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
const Buttons = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  padding: 5px;
  text-align: center;
  border-radius: 5px;
`;
function App() {
  const [searchType, setType] = useState("name");
  const [inputValue, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [recipes, setRecipes] = useState([]);
  return (
    <StyledApp>
      <h1>Recipe Finder</h1>
      <Buttons>
        <button
          // disabled={searchType === "name"}
          onClick={() => {
            setType("name");
            setValue("");
            setRecipes([]);
          }}
          className={searchType === "name" ? "selected" : "unselected"}
        >
          Search by name
        </button>
        <button
          // disabled={searchType === "ingredients"}
          onClick={() => {
            setType("ingredients");
            setValue("");
            setRecipe({});
          }}
          className={searchType === "ingredients" ? "selected" : "unselected"}
        >
          search by ingredients
        </button>
      </Buttons>
      <Input value={inputValue} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          fetchSpoonacular(
            searchType,
            inputValue,
            setRecipe,
            setRecipes,
            setIsLoading
          );
        }}
      >
        Get result
      </button>
      <AppContent
        isLoading={isLoading}
        recipe={recipe}
        recipes={recipes}
        setRecipe={setRecipe}
        setRecipes={setRecipes}
        type={searchType}
      />
    </StyledApp>
  );
}

export default App;
