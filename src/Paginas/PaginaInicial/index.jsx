import Banner from "../../Componentes/Banner";
import Navbar from "../../Componentes/Navbar/Navbar";
import ItemDaSemana from "../../Componentes/itemDaSemana";
import Footer from "../../Componentes/Rodape"
import CardReceitas from "./CardReceitas"
import LinkTodas from "./CardReceitas/LinkTodas";

export default function Inicio() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardReceitas />
      <LinkTodas />
      <ItemDaSemana />
      <Footer />
    </div>
  );
}
