import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardRefogado from "./CardRefogado";


export default function Refogados() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Refogado</h1>
            <CardRefogado />
            <Footer />
        </div>
    )
}