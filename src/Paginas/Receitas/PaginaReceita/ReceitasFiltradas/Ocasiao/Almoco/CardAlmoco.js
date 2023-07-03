import React from "react";
import CardsReceitas from "../../../../../../Componentes/CardsReceitas";
import { AlmocoArray } from "./AlmocoArray";
import styles from "../../../../Cards/Cards.module.css";

function CardAlmoco() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        {AlmocoArray.map((card, index) => (
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

export default CardAlmoco;
