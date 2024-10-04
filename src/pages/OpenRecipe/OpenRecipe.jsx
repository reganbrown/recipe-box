import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./OpenRecipe.scss";
import axios from "axios";

const OpenRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const apiUrl = "http://localhost:8080/recipes";
    try {
      const response = await axios.get(apiUrl);
      setRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="wrapper">
      <div className="recipes-list-container">
        <h1 className="recipes-title">Recipes</h1>
        <div className="recipes__list">
          {recipes.map((recipe) => (
            <div className="recipes__item" key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`} className="link">
                <p>{recipe.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link className="links" to="/CreateRecipe">
        <div className="new-recipe">+</div>
      </Link>
    </div>
  );
};

export default OpenRecipe;
