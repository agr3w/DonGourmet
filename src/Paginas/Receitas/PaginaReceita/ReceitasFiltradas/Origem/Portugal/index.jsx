import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardPortugal from "./CardPortugal";


export default function Portugal() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Pratos Portugueses</h1>
            <CardPortugal />
            <Footer />
        </div>
    )
}