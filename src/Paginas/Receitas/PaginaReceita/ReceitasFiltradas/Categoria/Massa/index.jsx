import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardMassa from "./CardMassa";


export default function Massas() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Massas</h1>
            <CardMassa />
            <Footer />
        </div>
    )
}