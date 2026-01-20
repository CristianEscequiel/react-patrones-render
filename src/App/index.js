import React from 'react'
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal';

function App() {
      const {
        loading,
        error,
        filterTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        searchValue,
        setSerachValue,
        completedTodos,
        totalTodos,
        addtodo
    } = useTodos()

    return (
        <>
            <TodoHeader>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos} />
                <TodoSearch
                    searchValue={searchValue}
                    setSerachValue={setSerachValue} />
            </TodoHeader>
                <TodoList
                error={error}
                loading={loading}
                filterTodos={filterTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                onError={()=> <TodosError /> }
                onLoading={()=>  <TodosLoading /> }
                onEmptyTodos={()=> <EmptyTodos /> }
                onEmptySearchResults={
                    (searchText)=> <p>No hay resuñtados para {searchText}</p> }
                // render = { todo => (
                //         <TodoItem
                //             onComplete={() => completeTodo(todo.text,
                //                 todo.completed)}
                //             onDelete={() => deleteTodo(todo.text)}
                //             key={todo.text}
                //             text={todo.text}
                //             completed={todo.completed} />
                //     )} 
                >

                { todo => (
                        <TodoItem
                            onComplete={() => completeTodo(todo.text,
                                todo.completed)}
                            onDelete={() => deleteTodo(todo.text)}
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed} />
                    )}
                
                </TodoList>

                <CreateTodoButton setOpenModal={setOpenModal} />

                {openModal && (
                    <Modal>
                        <TodoForm
                        setOpenModal={setOpenModal}
                        addtodo={addtodo} />
                    </Modal>

                )}
            </>
            );
}

export default App;
