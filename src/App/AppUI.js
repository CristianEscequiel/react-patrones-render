import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal';

import { TodoContext } from '../TodoContext';
import React from 'react';

function AppUI() { 

    const {
                loading,
                error,
                filterTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal
            } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter />
            <TodoSearch />
                <TodoList>
                {loading && 
                <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
                </>
                 }
                {error && <TodosError/>}
                {(!loading && filterTodos.length === 0) &&
                 <EmptyTodos/>}
                
                {filterTodos.map(todo => (
                    <TodoItem
                        onComplete={() => completeTodo(todo.text,
                        todo.completed)}
                        onDelete={() => deleteTodo(todo.text)}
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed} />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
                
            )}
        </>
    )
}

export { AppUI }
