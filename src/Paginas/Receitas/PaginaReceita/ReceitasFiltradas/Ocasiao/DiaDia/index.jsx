import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardDiaDia from "./CardDiaDia";


export default function DiaDia() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>As receitas perfeitas para o seu Dia-a-dia</h1>
            <CardDiaDia />
            <Footer />
        </div>
    )
}