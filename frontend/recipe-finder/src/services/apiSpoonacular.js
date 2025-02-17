/* eslint-disable no-unused-vars */
import axios from "axios";
export async function fetchSpoonacular(type, query, setObject, setLoading) {
  setLoading(true);
  const url =
    type === "name"
      ? `http://127.0.0.1:3000/recipe?name=${query}`
      : `http://127.0.0.1:3000/recipes-by-ingredients?ingredients=${query}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    setObject(response.data);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    throw new Error(e);
  }
}
