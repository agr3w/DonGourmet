import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardsIndefinido from "./CardIndefinido";


export default function Indefinido() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Receitas Indefinidas</h1>
            <CardsIndefinido />
            <Footer />
        </div>
    )
}