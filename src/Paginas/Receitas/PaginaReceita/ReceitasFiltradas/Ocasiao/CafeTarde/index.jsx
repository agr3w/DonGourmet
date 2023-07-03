import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardCafe from "./CardCafe";


export default function CafeTarde() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Receitas que pedem aquele cafezinho</h1>
            <CardCafe />
            <Footer />
        </div>
    )
}