import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardBrasileira from "./CardBrasileira";


export default function Brasileiras() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Pratos Brasileiros</h1>
            <CardBrasileira />
            <Footer />
        </div>
    )
}