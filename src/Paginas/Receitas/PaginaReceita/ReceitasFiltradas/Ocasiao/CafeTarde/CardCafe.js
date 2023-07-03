import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { CafeArray } from "./CafeArray";
import styles from "../../../../Cards/Cards.module.css";

function CardCafe() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {CafeArray.map((card, index) => (
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

export default CardCafe;
