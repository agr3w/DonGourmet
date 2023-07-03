import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { PersaArray } from "./PersaArray";
import styles from "../../../../Cards/Cards.module.css";

function CardPersa() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {PersaArray.map((card, index) => (
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

export default CardPersa;
