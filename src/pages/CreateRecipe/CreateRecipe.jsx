import Ingredient from "../../components/Ingredient/Ingredient";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateRecipe.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CreateRecipe() {
  const [numberOfIngredients, setNumberOfIngredients] = useState(1);
  const [ingredientList, setIngredientList] = useState([]);

  async function postRecipe(recipe) {
    let results = await axios.post("http://localhost:8080/recipes", recipe);
    console.log(results);
  }

  let nav = useNavigate();

  function handleInputChange(event) {
    setNumberOfIngredients(parseInt(event.target.value) || 0);
  }

  function updateIngredientList(id, ingredient, amount) {
    let newObject = { ingredient: ingredient, amount: amount };
    let newIngredientList = ingredientList;
    newIngredientList[id] = newObject;
    setIngredientList(newIngredientList);
    console.log(ingredientList);
  }

  function submitRecipe(event) {
    event.preventDefault();
    let name = event.target.recipeName.value;
    let instructions = event.target.recipeInstructions.value;
    let ingredients = ingredientList;
    let recipe = {
      name: name,
      ingredients: ingredients,
      instructions: instructions,
    };
    console.log(recipe);
    postRecipe(recipe);
    toast.success("Submitted!", {
      onClose: () => nav("/"),
    });
  }

  return (
    <div className="page">
      <h1 className="form-header"> Create A New Recipe </h1>
      <form onSubmit={submitRecipe} className="recipe-form">
        <label className="label">Name of Recipe:</label>
        <input
          type="text"
          placeholder="Name your recipe"
          className="form__input"
          name="recipeName"
        ></input>
        <label className="label">Number of Ingredients:</label>
        <input
          type="number"
          placeholder="Number of ingredients"
          name="numberOfIngredients"
          onChange={handleInputChange}
          className="form__input"
        ></input>

        {Array.from({ length: numberOfIngredients }).map((_, index) => (
          <Ingredient key={index} update={updateIngredientList} id={index} />
        ))}
        <label className="label">Recipe Instructions:</label>
        <textarea
          placeholder="Add recipe instructions"
          name="recipeInstructions"
          className="form__input instructions"
        ></textarea>

        <button className="submitButton">Build Recipe</button>
        <ToastContainer />
        <Link to="/" className="cancel__link">
          <div className="cancel">Cancel</div>
        </Link>
      </form>
    </div>
  );
}
