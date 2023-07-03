import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardBolo from "./CardBolo";


export default function Bolos() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Bolos</h1>
            <CardBolo />
            <Footer />
        </div>
    )
}