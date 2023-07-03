import React from "react";
import CardsReceitas from "../../../Componentes/CardsReceitas";
import { Receitas } from "../../../Componentes/CardsReceitas/dataReceitas";
import styles from "./Cards.module.css";

function Cards() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {Receitas.map((card, index) => (
          <CardsReceitas
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            dificult={card.dificult}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
