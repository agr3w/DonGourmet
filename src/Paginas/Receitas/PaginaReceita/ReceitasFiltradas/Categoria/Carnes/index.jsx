import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardCarnes from "./CardCarnes";


export default function Carnes() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Carnes</h1>
            <CardCarnes />
            <Footer />
        </div>
    )
}