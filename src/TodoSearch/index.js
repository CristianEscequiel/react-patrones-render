import './TodoSearch.css'


function TodoSearch({searchValue ,setSerachValue}) {
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