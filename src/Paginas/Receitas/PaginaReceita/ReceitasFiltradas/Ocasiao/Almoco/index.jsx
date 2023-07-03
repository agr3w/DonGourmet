import Categories from "../../../../../../Componentes/Categorias";
import Navbar from "../../../../../../Componentes/Navbar/Navbar";
import Footer from "../../../../../../Componentes/Rodape";
import CardAlmoco from "./CardAlmoco";


export default function Almoco() {
    return(
        <div>
            <Navbar />
            <Categories />
            <h1>Receitas para o seu almoço</h1>
            <CardAlmoco />
            <Footer />
        </div>
    )
}