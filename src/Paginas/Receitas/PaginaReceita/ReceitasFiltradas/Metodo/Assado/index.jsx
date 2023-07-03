import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardAssado from "./CardAssado";


export default function Assados() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Assados</h1>
            <CardAssado />
            <Footer />
        </div>
    )
}