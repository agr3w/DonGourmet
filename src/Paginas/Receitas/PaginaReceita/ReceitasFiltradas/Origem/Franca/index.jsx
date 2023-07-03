import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardFranca from "./CardFranca";


export default function Franca() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Pratos franceses</h1>
            <CardFranca />
            <Footer />
        </div>
    )
}