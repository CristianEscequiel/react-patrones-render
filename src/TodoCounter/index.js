import './TodoCounter.css';
import React from 'react';


function TodoCounter( { completedTodos,totalTodos , loading }) {

  return (
    <>
    <h1 
    className={`TodoCounter${(totalTodos <= 0 )&& " hidden"}  
    TodoCounter${(loading)&& "--loading"}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
    <h1 className={`TodoCounter${totalTodos > 0 && " hidden"}
      TodoCounter${(loading)&& "--loading"} `}>
    FELICITACIONES <br/>NINGUN TODO POR COMPLETAR
    </h1>
    </>
  );
}

export { TodoCounter }