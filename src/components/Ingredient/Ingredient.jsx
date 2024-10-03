import { useState } from "react";
import "./Ingredient.scss";

export default function Ingredient({ update, id }) {
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");

  function onChange(event) {
    const { name, value } = event.target;

    if (name === "ingredientName") {
      setIngredient(value);
      update(id, value, amount);
    } else if (name === "ingredientAmount") {
      setAmount(value);
      update(id, ingredient, value);
    }
  }

  return (
    <div className="ingredient-list">
      <div className="wrapper__left">
        <label className="label">Ingredient:</label>
        <input
          type="text"
          placeholder="Add an ingredient"
          className="form__input ingredient"
          name="ingredientName"
          value={ingredient}
          onChange={onChange}
        />
      </div>
      <div className="wrapper__right">
        <label className="label">Amount:</label>
        <input
          type="text"
          placeholder="Add ingredient amount"
          className="form__input amount"
          name="ingredientAmount"
          value={amount}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
