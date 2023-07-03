import React from "react";
import PropTypes from "prop-types";
import styles from "./CardPrincipal.module.css";
import { Link } from "react-router-dom";

function CardPrincipal({ image, title, description, link }) {

  return (
    <div className={styles.card}>
      <Link to={link}> <img src={image} alt={title} className={styles.image} /> </Link>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link to={link} className={styles.link}>Ver Receita</Link>
      </div>
    </div>
  );
}

CardPrincipal.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardPrincipal;

