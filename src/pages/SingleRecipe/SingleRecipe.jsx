import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <div className="recipe-container"> 
            {recipe ? (
                <>
                   <h1>{recipe.name}</h1>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>
                                {item.amount} of {item.ingredient}
                            </li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <p>{recipe.instructions}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SingleRecipe;
