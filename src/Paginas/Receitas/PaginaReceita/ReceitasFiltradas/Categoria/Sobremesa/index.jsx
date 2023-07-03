import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardSobremesas from "./CardSobremesas";


export default function Sobremesas() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Receitas para sobremesa</h1>
            <CardSobremesas />
            <Footer />
        </div>
    )
}