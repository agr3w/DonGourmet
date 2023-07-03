import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardCozido from "./CardCozido";


export default function Cozido() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Cozidos</h1>
            <CardCozido />
            <Footer />
        </div>
    )
}