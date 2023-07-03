import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { IndefinidoArray } from "./IndefinidoArray";
import styles from "../../../../Cards/Cards.module.css";

function CardIndefinido() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {IndefinidoArray.map((card, index) => (
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

export default CardIndefinido;
