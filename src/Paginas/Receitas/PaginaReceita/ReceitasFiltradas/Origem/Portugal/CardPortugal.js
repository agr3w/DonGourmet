import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { PortugalArray } from "./PortugalArray";
import styles from "../../../../Cards/Cards.module.css";

function CardPortugal() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {PortugalArray.map((card, index) => (
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

export default CardPortugal;
