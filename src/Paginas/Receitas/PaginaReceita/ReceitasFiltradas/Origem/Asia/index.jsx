import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardAsia from "./CardAsia";


export default function Asia() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Receitas Asiaticas</h1>
            <CardAsia />
            <Footer />
        </div>
    )
}