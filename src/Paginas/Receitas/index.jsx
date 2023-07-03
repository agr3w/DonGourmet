// carrega todos os componentes da pagina

import Cards from "./Cards";
import Navbar from "../../Componentes/Navbar/Navbar";
import Categorias from "../../Componentes/Categorias/index"
import Footer from "../../Componentes/Rodape";

export default function Receitas() {
  
  return (
    <div>
      <Navbar />
      <Categorias />
      <h1>Todas as receitas</h1>
      <Cards />
      <Footer />
    </div>
  );
}
