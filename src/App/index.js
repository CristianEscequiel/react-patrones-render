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
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

function App() {
    const { 
        states ,
        stateUpdaters
    } = useTodos()

    const {
        loading,
        searchedTodos,
        error,
        openModal,
        searchValue,
        completedTodos,
        totalTodos,
    } = states

    const {
        deleteTodo,
        completeTodo,
        addtodo,
        sincronizeTodos,
        setSerachValue,
        setOpenModal,
    } = stateUpdaters

    return (
        <>
            <TodoHeader
                loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSerachValue={setSerachValue}
                />
            </TodoHeader>
            <TodoList
                error={error}
                loading={loading}
                filterTodos={searchedTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={
                    (searchText) => <p>No hay resuñtados para {searchText}</p>}
                render={todo => (
                    <TodoItem
                        onComplete={() => completeTodo(todo.text,
                            todo.completed)}
                        onDelete={() => deleteTodo(todo.text)}
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed} />
                )}
            >

                {todo => (
                    <TodoItem
                        onComplete={() => completeTodo(todo.text,
                            todo.completed)}
                        onDelete={() => deleteTodo(todo.text)}
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed} />
                )}

            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm
                        setOpenModal={setOpenModal}
                        addtodo={addtodo} />
                </Modal>

            )}

            <CreateTodoButton setOpenModal={setOpenModal} />

            <ChangeAlertWithStorageListener
                sincronize={sincronizeTodos} />
        </>
    );
}

export default App;
