import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import styles from "./Navbar.module.css";
import logo from "../Rodape/logo.png";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <img src={logo} className={styles.logo} />
        </li>
        <li>
          <a href="/" className={styles.link}>
            Página Inicial
          </a>
        </li>
        <li>
          <a href="/Receitas" className={styles.link}>
            Receitas
          </a>
        </li>
        <li>
          <a href="https://portifolio-weslley-kampa.netlify.app/" className={styles.link}>
            Sobre
          </a>
        </li>
        <li>
          <div className={styles.profileIcon} onClick={handleMenuClick}>
            <FaUserCircle />
            {isMenuOpen && (
              <ul className={styles.menu}>
                <li>
                  <a href="/">Criar</a>
                </li>
                <li>
                  <a href="/">Entrar</a>
                </li>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
