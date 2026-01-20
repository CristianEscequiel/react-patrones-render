import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render
  return (
    <>
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {( !!props.totalTodos && !props.filterTodos.length) && props.onEmptySearchResults(props.searchText)}

      {props.filterTodos.map(renderFunc)}

    </section>
    </>
  );
}

export { TodoList }
