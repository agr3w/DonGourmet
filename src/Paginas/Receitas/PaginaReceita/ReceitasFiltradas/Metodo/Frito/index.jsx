import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardFrito from "./CardFrito";


export default function Fritos() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Fritos</h1>
            <CardFrito />
            <Footer />
        </div>
    )
}