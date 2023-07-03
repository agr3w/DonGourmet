import React from 'react';
import { FestaPagina } from '../../../ReceitasPaginas';
import PaginaReceitas from "../../../../../Componentes/ReceitaPagina";

export default function Receita4() {
  const idBuscado = 4; // ID desejado para a busca

  const receitaEncontrada = FestaPagina.find((receita) => receita.id === idBuscado);

  if (!receitaEncontrada) {
    
    return (
      <div>
        <h1>Receita não encontrada</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <PaginaReceitas
          key={receitaEncontrada.id}
          id={receitaEncontrada.id}
          banner={receitaEncontrada.banner}
          titulo={receitaEncontrada.titulo}
          dificuldade={receitaEncontrada.dificuldade}
          tempo={receitaEncontrada.tempo}
          rendimento={receitaEncontrada.rendimento}
          ingredientes={receitaEncontrada.ingreditentes}
          preparo={receitaEncontrada.preparo}
          categoria={receitaEncontrada.categoria}
          metodo={receitaEncontrada.metodo}
          origem={receitaEncontrada.origem}
          ocasiao={receitaEncontrada.ocasiao}
          linkFiltroCat={receitaEncontrada.linkFiltroCat}
          linkFiltroMet={receitaEncontrada.linkFiltroMet}
          linkFiltroOri={receitaEncontrada.linkFiltroOri}
          linkFiltroOca={receitaEncontrada.linkFiltroOca}
        />
      </div>
    </div>
  );
}
