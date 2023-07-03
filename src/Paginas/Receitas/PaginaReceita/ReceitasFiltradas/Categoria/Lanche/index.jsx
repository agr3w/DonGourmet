import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardLanche from "./CardLanche";


export default function Lanches() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Lanches</h1>
            <CardLanche />
            <Footer />
        </div>
    )
}