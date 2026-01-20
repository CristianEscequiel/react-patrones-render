import './TodoCounter.css';
import React from 'react';


function TodoCounter( { completedTodos,totalTodos }) {

  return (
    <>
    <h1 
    className={`TodoCounter${totalTodos <= 0 && " hidden"}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
    <h1 className={`TodoCounter${totalTodos > 0 && " hidden"}`}>
    FELICITACIONES <br/>NINGUN TODO POR COMPLETAR
    </h1>
    </>
  );
}

export { TodoCounter }