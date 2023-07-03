import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardPersa from "./CardPersa";


export default function Persa() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Receitas Persas</h1>
            <CardPersa />
            <Footer />
        </div>
    )
}