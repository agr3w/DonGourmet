import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { DiaDiaArray } from "./DiaDiaArray";
import styles from "../../../../Cards/Cards.module.css";

function CardDiaDia() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {DiaDiaArray.map((card, index) => (
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

export default CardDiaDia;
