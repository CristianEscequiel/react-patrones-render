import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'


function TodoSearch() {
  const {searchValue ,setSerachValue} = React.useContext(TodoContext)
  return (
    <input 
    className='TodoSearch'
    placeholder="cortar cebolla"
    value={searchValue}
    onChange={(event)=> 
      setSerachValue(event.target.value)}
    />
  );
}

export { TodoSearch }