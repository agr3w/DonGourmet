import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ReceitaPagina.module.css";
import Navbar from "../Navbar/Navbar";
import { PiClockCountdownBold as Clock } from "react-icons/pi";
import { PiHammerLight as Hammer } from "react-icons/pi";
import { MdDinnerDining as Food } from "react-icons/md";
import { AiFillStar as Star } from "react-icons/ai";

import Footer from "../Rodape";

export default function PaginaReceitas({
  banner,
  titulo,
  dificuldade,
  tempo,
  rendimento,
  ingredientes,
  preparo,
  categoria,
  metodo,
  origem,
  ocasiao,
  linkFiltroCat,
  linkFiltroMet,
  linkFiltroOri,
  linkFiltroOca,
}) {

  useEffect(() => {
    // Quando a página é carregada, ela rola para o topo
    window.scrollTo(0, 0);
  }, []);

  const [avaliacao, setAvaliacao] = useState(0);
  const [preparoCompleto, setPreparoCompleto] = useState(
    new Array(preparo.length).fill(false)
  );

  useEffect(() => {
    const storedAvaliacao = localStorage.getItem("avaliacao");
    if (storedAvaliacao) {
      setAvaliacao(parseInt(storedAvaliacao));
    }
  }, []);

  const handleAvaliacao = (valor) => {
    setAvaliacao(valor);
    localStorage.setItem("avaliacao", valor.toString());
  };

  const togglePreparoCompleto = (index) => {
    const novoPreparoCompleto = [...preparoCompleto];
    novoPreparoCompleto[index] = !novoPreparoCompleto[index];
    setPreparoCompleto(novoPreparoCompleto);
  };

  const isItemCompleto = (index) => preparoCompleto[index];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.titulo}>{titulo}</h3>
          <div className={styles.divSubs}>
            <p className={styles.subtitulo}>
              <span>
                <Hammer />
              </span>
              <strong>Dificuldade:</strong> {dificuldade}
            </p>
            <p className={styles.subtitulo}>
              <span>
                <Clock />
              </span>
              <strong>Tempo:</strong> {tempo}
            </p>
            <p className={styles.subtitulo}>
              <span>
                <Food />
              </span>
              <strong>Rendimento:</strong> {rendimento}
            </p>
            <div className={styles.avaliacao}>
              {[1, 2, 3, 4, 5].map((valor) => (
                <span
                  key={valor}
                  className={`${styles.estrela} ${
                    valor <= avaliacao ? styles.estrelaCheia : styles.estrelaVazia
                  }`}
                  onClick={() => handleAvaliacao(valor)}
                >
                  <Star />
                </span>
              ))}
            </div>
          </div>
          <img src={banner} alt={titulo} className={styles.banner} />
          <h2>Ingredientes</h2>
          <ul>
            {ingredientes.map((item, index) => (
              <li key={index} className={styles.ingredientes}>
                {item}
              </li>
            ))}
          </ul>
          <h2>Modo de preparo</h2>
          <div className={styles.preparo}>
            <ul>
              {preparo.map((item, index) => (
                <li
                  key={index}
                  className={`${isItemCompleto(index) ? styles.completo : ""}`}
                >
                  <div className={styles.checkboxItem}>
                    <span
                      className={`${styles.checkbox} ${
                        isItemCompleto(index) ? styles.checkboxCompleto : ""
                      }`}
                      onClick={() => togglePreparoCompleto(index)}
                    >
                      {isItemCompleto(index) ? (
                        <span className={styles.checkboxIcon}>&#10003;</span>
                      ) : (
                        <span className={styles.checkboxIcon}></span>
                      )}
                    </span>
                    <p>{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <h2>Informações adicionais</h2>
          <div className={styles.infos}>
            <h4>Categoria</h4>
            <Link to={linkFiltroCat} >{categoria}</Link>
            <h4>Método de preparo</h4>
            <ul>
              {metodo.map((item, index) => (
                <li key={index}>
                  <Link to={linkFiltroMet} >{item}</Link>
                </li>
              ))}
            </ul>
            <h4>Origem geográfica</h4>
            <Link to={linkFiltroOri} >{origem}</Link>
            <h4>Ocasiões</h4>
            <Link to={linkFiltroOca} >{ocasiao}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

PaginaReceitas.propTypes = {
  banner: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  dificuldade: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  rendimento: PropTypes.string.isRequired,
  ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
  preparo: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoria: PropTypes.string.isRequired,
  metodo: PropTypes.arrayOf(PropTypes.string).isRequired,
  origem: PropTypes.string.isRequired,
  ocasiao: PropTypes.string.isRequired,
};
