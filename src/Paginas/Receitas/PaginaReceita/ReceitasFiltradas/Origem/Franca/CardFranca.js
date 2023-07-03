import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { FrancaArray } from "./FrancaArray";
import styles from "../../../../Cards/Cards.module.css";

function CardFranca() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {FrancaArray.map((card, index) => (
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

export default CardFranca;
