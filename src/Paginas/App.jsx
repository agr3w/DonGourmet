import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./PaginaInicial";
import Receitas from "./Receitas";

// Almoço

import Receita1 from "./Receitas/PaginaReceita/Almoco/Receita1";
import Receita2 from "./Receitas/PaginaReceita/Almoco/Receita2";
import Receita9 from "./Receitas/PaginaReceita/Almoco/Receita9";
import Receita10 from "./Receitas/PaginaReceita/Almoco/Receita10";
import Receita15 from "./Receitas/PaginaReceita/Almoco/Receita15";

// Festa

import Receita3 from "./Receitas/PaginaReceita/Festa/Receita3";
import Receita4 from "./Receitas/PaginaReceita/Festa/Receita4";
import Receita7 from "./Receitas/PaginaReceita/Festa/Receita7";
import Receita8 from "./Receitas/PaginaReceita/Festa/Receita8";

// Sobremesa

import Receita5 from "./Receitas/PaginaReceita/Sobremesa/Receita5";
import Receita6 from "./Receitas/PaginaReceita/Sobremesa/Receita6";
import Receita12 from "./Receitas/PaginaReceita/Sobremesa/Receita12";
import Receita13 from "./Receitas/PaginaReceita/Sobremesa/Receita13";
import Receita14 from "./Receitas/PaginaReceita/Sobremesa/Receita14";

// Lanche

import Receita11 from "./Receitas/PaginaReceita/Lanche/Receita11";

// Filtros Categoria

import Carnes from "./Receitas/PaginaReceita/ReceitasFiltradas/Categoria/Carnes";
import Bolos from "./Receitas/PaginaReceita/ReceitasFiltradas/Categoria/Bolo";
import Lanches from "./Receitas/PaginaReceita/ReceitasFiltradas/Categoria/Lanche";
import Massas from "./Receitas/PaginaReceita/ReceitasFiltradas/Categoria/Massa";
import Sobremesas from "./Receitas/PaginaReceita/ReceitasFiltradas/Categoria/Sobremesa";

// Filtros Metodo

import Refogados from "./Receitas/PaginaReceita/ReceitasFiltradas/Metodo/Refogado";
import Fritos from "./Receitas/PaginaReceita/ReceitasFiltradas/Metodo/Frito";
import Assados from "./Receitas/PaginaReceita/ReceitasFiltradas/Metodo/Assado";
import Simples from "./Receitas/PaginaReceita/ReceitasFiltradas/Metodo/Simples";
import Cozidos from "./Receitas/PaginaReceita/ReceitasFiltradas/Metodo/Cozido";

// Filtros Origem

import Brasileira from "./Receitas/PaginaReceita/ReceitasFiltradas/Origem/Brasileira";
import Estadonidense from "./Receitas/PaginaReceita/ReceitasFiltradas/Origem/Estadonidense";
import Franca from "./Receitas/PaginaReceita/ReceitasFiltradas/Origem/Franca";
import Persa from "./Receitas/PaginaReceita/ReceitasFiltradas/Origem/Persa";
import Indefinido from "./Receitas/PaginaReceita/ReceitasFiltradas/Origem/Indefinido";
import Portugal from "./Receitas/PaginaReceita/ReceitasFiltradas/Origem/Portugal";
import Asia from "./Receitas/PaginaReceita/ReceitasFiltradas/Origem/Asia";

// Filtros Ocasião

import Almoco from "./Receitas/PaginaReceita/ReceitasFiltradas/Ocasiao/Almoco";
import CafeTarde from "./Receitas/PaginaReceita/ReceitasFiltradas/Ocasiao/CafeTarde";
import DiaDia from "./Receitas/PaginaReceita/ReceitasFiltradas/Ocasiao/DiaDia";
import Feriado from "./Receitas/PaginaReceita/ReceitasFiltradas/Ocasiao/Feriado";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/receitas" element={<Receitas />} />

        {/* Almoço */}

        <Route path="/receitas/almoco/receita1" element={<Receita1 />} />
        <Route path="/receitas/almoco/receita2" element={<Receita2 />} />
        <Route path="/receitas/almoco/receita9" element={<Receita9 />} />
        <Route path="/receitas/almoco/receita10" element={<Receita10 />} />
        <Route path="/receitas/almoco/receita15" element={<Receita15 />} />

        {/* Festa */}

        <Route path="/receitas/festa/receita3" element={<Receita3 />} />
        <Route path="/receitas/festa/receita4" element={<Receita4 />} />
        <Route path="/receitas/festa/receita7" element={<Receita7 />} />
        <Route path="/receitas/festa/receita8" element={<Receita8 />} />

        {/* Sobremesa */}

        <Route path="/receitas/sobremesa/receita5" element={<Receita5 />} />
        <Route path="/receitas/sobremesa/receita6" element={<Receita6 />} />
        <Route path="/receitas/Sobremesa/receita12" element={<Receita12 />} />
        <Route path="/receitas/sobremesa/receita13" element={<Receita13 />} />
        <Route path="/receitas/sobremesa/receita14" element={<Receita14 />} />

        {/* Lanche */}

        <Route path="/receitas/lanche/receita11" element={<Receita11 />} />

        {/* Filtros Categorias*/}

        <Route path="/receitas/ReceitasFiltradas/Carnes" element={<Carnes />} />
        <Route path="/receitas/ReceitasFiltradas/Bolo" element={<Bolos />} />
        <Route path="/receitas/ReceitasFiltradas/Lanches" element={<Lanches />} />
        <Route path="/receitas/ReceitasFiltradas/Massa" element={<Massas />} />
        <Route path="/receitas/ReceitasFiltradas/Sobremesa" element={<Sobremesas />} />

        {/* Filtros Metodo */}

        <Route path="/receitas/ReceitasFiltradas/Refogado" element={<Refogados />} />
        <Route path="/receitas/ReceitasFiltradas/Frito" element={<Fritos />} />
        <Route path="/receitas/ReceitasFiltradas/Assado" element={<Assados />} />
        <Route path="/receitas/ReceitasFiltradas/Cozido" element={<Cozidos />} />
        <Route path="/receitas/ReceitasFiltradas/Simples" element={<Simples />} />

        {/* Filtros Origem */}

        <Route path="/receitas/ReceitasFiltradas/Brasileira" element={<Brasileira />} />
        <Route path="/receitas/ReceitasFiltradas/Estadonidense" element={<Estadonidense />} />
        <Route path="/receitas/ReceitasFiltradas/Franca" element={<Franca />} />
        <Route path="/receitas/ReceitasFiltradas/Portugal" element={<Portugal />} />
        <Route path="/receitas/ReceitasFiltradas/Persa" element={<Persa />} />
        <Route path="/receitas/ReceitasFiltradas/Indefinido" element={<Indefinido />} />
        <Route path="/receitas/ReceitasFiltradas/Asia" element={<Asia />} />

       {/* Filtros Ocasião */}

        <Route path="/receitas/ReceitasFiltradas/Almoco" element={<Almoco />} />
        <Route path="/receitas/ReceitasFiltradas/CafeTarde" element={<CafeTarde />} />
        <Route path="/receitas/ReceitasFiltradas/DiaDia" element={<DiaDia />} />
        <Route path="/receitas/ReceitasFiltradas/Feriado" element={<Feriado />} />

      </Routes>
    </Router>
  );
}

export default App;
