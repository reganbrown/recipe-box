import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
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
        <>
            <h1>Recipes</h1>
            <div className='recipes__list'>
                {recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                            <p>{recipe.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OpenRecipe;
