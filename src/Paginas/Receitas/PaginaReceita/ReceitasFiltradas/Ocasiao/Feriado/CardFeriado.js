import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { FeriadoArray } from "./FeriadoArray";
import styles from "../../../../Cards/Cards.module.css";

function CardFeriado() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {FeriadoArray.map((card, index) => (
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

export default CardFeriado;
