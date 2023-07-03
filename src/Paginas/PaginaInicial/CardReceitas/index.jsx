import CardPrincipal from "../../../Componentes/CardPrincipal";
import { AlmocoData, FestaData, SobremesaData } from "../data";
import styles from "./CardsReceitas.module.css";
import { GrLinkNext as Next } from "react-icons/gr";

export default function CardReceitas() {
  return (
    <div className={styles.Div}>
      <h3 className={styles.h3}>Receitas para você</h3>
      <h2>Almoço</h2>
      <div className={styles.cardsContainer}>
        {AlmocoData.map((card, index) => (
          <CardPrincipal
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
        <div className={styles.setaDiv}>
          <p>
            <a
              className={styles.seta}
              href={"/receitas/ReceitasFiltradas/Almoco"}
            >
              <Next />
            </a>
          </p>
        </div>
      </div>
      <div>
        <h2>Sobremesa</h2>
        <div className={styles.cardsContainer}>
          {SobremesaData.map((card, index) => (
            <CardPrincipal
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
          <div className={styles.setaDiv}>
            <p>
              <a
                className={styles.seta}
                href={"/receitas/ReceitasFiltradas/Sobremesa"}
              >
                <Next />
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2>Feriados</h2>
          <div className={styles.cardsContainer}>
            {FestaData.map((card, index) => (
              <CardPrincipal
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
            <div className={styles.setaDiv}>
              <p>
                <a
                  className={styles.seta}
                  href={"/receitas/ReceitasFiltradas/Feriado"}
                >
                  <Next />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
