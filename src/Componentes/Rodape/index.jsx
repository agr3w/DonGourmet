import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.links}>
        <div className={styles.column}>
          <a href="https://portifolio-weslley-kampa.netlify.app/">QUEM SOMOS</a>
          <a href="https://portifolio-weslley-kampa.netlify.app/">FALE CONOSCO</a>
        </div>
        <div className={styles.column}>
          <a href="https://portifolio-weslley-kampa.netlify.app/">TERMOS E CONDIÇÕES</a>
          <a href="https://portifolio-weslley-kampa.netlify.app/">TRABALHE CONOSCO</a>
        </div>
        <div className={styles.column}>
          <a href="https://portifolio-weslley-kampa.netlify.app/">POLÍTICA DE PRIVACIDADE</a>
          <a href="https://portifolio-weslley-kampa.netlify.app/">ANUNCIE</a>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com" className={styles.icon}>
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" className={styles.icon}>
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/weslley_kampa/" className={styles.icon}>
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
