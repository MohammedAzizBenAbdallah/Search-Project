/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Spinner from "../ui/Spinner";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
function AppContent({ isLoading, object, type }) {
  useEffect(
    function () {
      console.log(isLoading);
      console.log(object);
      console.log(type);
    },
    [isLoading]
  );
  if (isLoading) return <Spinner />;
  if (type === "name") return <Recipe recipe={object} />;
  if (type === "ingredients") return <Ingredients recipes={object} />;
}

export default AppContent;
