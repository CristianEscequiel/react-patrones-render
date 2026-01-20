import './TodoSearch.css'


function TodoSearch({searchValue ,setSerachValue , loading}) {
  return (
    <input 
    className='TodoSearch'
    placeholder="cortar cebolla"
    value={searchValue}
    onChange={(event)=> 
      setSerachValue(event.target.value)}
    disabled={loading}
    />
  );
}

export { TodoSearch }