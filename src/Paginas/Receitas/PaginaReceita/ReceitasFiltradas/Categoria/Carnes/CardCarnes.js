import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { CarnesArray } from "./CarnesArray";
import styles from "../../../../Cards/Cards.module.css";

function CardCarnes() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {CarnesArray.map((card, index) => (
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

export default CardCarnes;
