import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SingleRecipe.scss";

const SingleRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const getRecipe = async () => {
    const apiUrl = `http://localhost:8080/recipes/${id}`;
    try {
      const response = await axios.get(apiUrl);
      setRecipe(response.data);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [id]);

  return (
    <div className="recipe">
      <div className="recipe-container">
        {recipe ? (
          <>
            <h1 className="recipe__heading">{recipe.name}</h1>
            <h3 className="recipe__subheading">Ingredients</h3>
            <ul className="ingredient__list">
              {recipe.ingredients.map((item, index) => (
                <li className="ingredient__item" key={index}>
                  {item.amount} of {item.ingredient}
                </li>
              ))}
            </ul>
            <h3 className="recipe__subheading">Instructions</h3>
            <p className="recipe__instruction">{recipe.instructions}</p>
            <Link to="/" className="link">
              <p className="return-home">return</p>
            </Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SingleRecipe;
