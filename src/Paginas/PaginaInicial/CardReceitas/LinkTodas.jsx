import { Link } from "react-router-dom";
import { LinkReceitas } from "../data";
import styles from "./CardsReceitas.module.css";

export default function LinkTodas() {
  return (
    <div>
      {LinkReceitas.map((card, index) => (
        <p key={index}>
          <Link key={index} to={card.LinkReceitas} className={styles.todas}>
            {" "}
            Ver todas as receitas
          </Link>
        </p>
      ))}
    </div>
  );
}
