import React, { useState, useEffect } from "react";
import styles from "./ItemDaSemana.module.css";
import ingredientsData from "./IngredientesData.json";

function ItemDaSemana() {
  const [ingredienteDaSemana, setIngredienteDaSemana] = useState(null);

  useEffect(() => {
    const weekIngredients = ingredientsData.filter(
      (ingredient) => ingredient.week
    );
    const randomIndex = Math.floor(Math.random() * weekIngredients.length);
    const selectedIngredient = weekIngredients[randomIndex];
    setIngredienteDaSemana(selectedIngredient);
  }, []);

  if (!ingredienteDaSemana) {
    return null;
  }

  return (
    <div className={styles.itemDaSemana}>
      <h3>Ingrediente da Semana</h3>
      <div>
        <img
          src={ingredienteDaSemana.image}
          alt={ingredienteDaSemana.name}
        />
        <h4>{ingredienteDaSemana.name}</h4>
        <p>{ingredienteDaSemana.description}</p>
      </div>
    </div>
  );
}

export default ItemDaSemana;
