import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { FritosArray } from "./FritoArray";
import styles from "../../../../Cards/Cards.module.css";

function CardFrito() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {FritosArray.map((card, index) => (
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

export default CardFrito;
