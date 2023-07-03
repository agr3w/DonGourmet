import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardSimples from "./CardSimples";


export default function Simples() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Simples</h1>
            <CardSimples />
            <Footer />
        </div>
    )
}