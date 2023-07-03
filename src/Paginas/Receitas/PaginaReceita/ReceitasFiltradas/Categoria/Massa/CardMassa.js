import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { MassaArray } from "./MassaArray";
import styles from "../../../../Cards/Cards.module.css";

function CardMassa() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {MassaArray.map((card, index) => (
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

export default CardMassa;
