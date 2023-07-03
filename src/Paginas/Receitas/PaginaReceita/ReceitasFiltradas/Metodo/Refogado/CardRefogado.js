import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { RefogadoArray } from "./RefogadoArray";
import styles from "../../../../Cards/Cards.module.css";

function CardRefogado() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {RefogadoArray.map((card, index) => (
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

export default CardRefogado;
