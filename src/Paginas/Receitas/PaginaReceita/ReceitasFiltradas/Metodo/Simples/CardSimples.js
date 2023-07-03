import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { SimplesArray } from "./SimplesArray";
import styles from "../../../../Cards/Cards.module.css";

function CardSimples() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {SimplesArray.map((card, index) => (
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

export default CardSimples;
