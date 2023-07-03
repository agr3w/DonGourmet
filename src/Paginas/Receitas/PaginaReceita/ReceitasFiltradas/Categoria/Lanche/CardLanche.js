import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { LancheArray } from "./LancheArray";
import styles from "../../../../Cards/Cards.module.css";

function CardLanches() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {LancheArray.map((card, index) => (
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

export default CardLanches;
