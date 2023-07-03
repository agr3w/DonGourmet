import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { AsiaArray } from "./AsiaArray";
import styles from "../../../../Cards/Cards.module.css";

function CardAsia() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {AsiaArray.map((card, index) => (
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

export default CardAsia;
