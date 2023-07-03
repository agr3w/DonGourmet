import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { AssadoArray } from "./AssadoArray";
import styles from "../../../../Cards/Cards.module.css";

function CardAssado() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {AssadoArray.map((card, index) => (
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

export default CardAssado;
