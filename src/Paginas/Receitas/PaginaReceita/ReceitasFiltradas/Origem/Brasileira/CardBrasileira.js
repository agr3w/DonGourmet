import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { BrasileiraArray } from "./BrasileiraArray";
import styles from "../../../../Cards/Cards.module.css";

function CardBrasileira() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {BrasileiraArray.map((card, index) => (
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

export default CardBrasileira;
