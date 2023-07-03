import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardEstadonidense from "./CardEstadonidense";


export default function Estadonidense() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Receitas Estadonidenses</h1>
            <CardEstadonidense />
            <Footer />
        </div>
    )
}