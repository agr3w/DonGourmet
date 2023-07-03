import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { EstadonidenseArray } from "./EstadonidenseArray";
import styles from "../../../../Cards/Cards.module.css";

function CardEstadonidense() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {EstadonidenseArray.map((card, index) => (
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

export default CardEstadonidense;
