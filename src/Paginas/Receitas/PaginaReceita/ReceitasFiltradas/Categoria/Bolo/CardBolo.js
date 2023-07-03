import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { BoloArray } from "./BoloArray";
import styles from "../../../../Cards/Cards.module.css";

function CardBolo() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {BoloArray.map((card, index) => (
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

export default CardBolo;
