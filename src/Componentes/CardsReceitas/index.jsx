import React from "react";
import PropTypes from "prop-types";
import styles from "./CardsReceitas.module.css";
import { Link } from "react-router-dom";


function CardsReceitas({ image, title, description, dificult, link }) {
    return (
      <div className={styles.card}>
        <Link to={link}> <img src={image} alt={title} className={styles.image} /> </Link>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>Tempo de preparo: {description}</p>
          <p className={styles.description}>Dificuldade: {dificult}</p>
          <Link to={link} className={styles.link}>Ver Receita</Link>
        </div>
      </div>
    );
  }
    
  CardsReceitas.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
  
  export default CardsReceitas;
