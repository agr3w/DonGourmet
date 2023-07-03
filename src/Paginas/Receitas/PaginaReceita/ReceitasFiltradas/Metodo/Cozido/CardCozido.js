import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { CozidoArray } from "./CozidoArray";
import styles from "../../../../Cards/Cards.module.css";

function CardCozido() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {CozidoArray.map((card, index) => (
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

export default CardCozido;
