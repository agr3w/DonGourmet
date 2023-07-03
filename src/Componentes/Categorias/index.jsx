import React from "react";
import styles from "./Categorias.module.css";
import categoriesData from "./Categorias.json";

function Categories() {
  const origemDoPratoCategories = categoriesData.filter(
    (category) => category.categoryType === "Origem do Prato"
  );
  const metodoDePreparoCategories = categoriesData.filter(
    (category) => category.categoryType === "Método de Preparo"
  );
  const ocasioesCategories = categoriesData.filter(
    (category) => category.categoryType === "Ocasiões"
  );

  return (
    <aside className={styles.categories}>
      <h2>Categorias</h2>
      <ul>
        <li>
          <h3>Origem do Prato</h3>
          <ul>
            {origemDoPratoCategories.map((category) => (
              <li key={category.id}>
                <a href={category.link}>{category.name}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h3>Método de Preparo</h3>
          <ul>
            {metodoDePreparoCategories.map((category) => (
              <li key={category.id}>
                <a href={category.link}>{category.name}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h3>Ocasiões</h3>
          <ul>
            {ocasioesCategories.map((category) => (
              <li key={category.id}>
                <a href={category.link}>{category.name}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Categories;
