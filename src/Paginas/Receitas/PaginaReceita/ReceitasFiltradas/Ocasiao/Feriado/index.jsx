import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardFeriado from "./CardFeriado";


export default function Feriado() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Receitas perfeitas para o feriadão</h1>
            <CardFeriado />
            <Footer />
        </div>
    )
}