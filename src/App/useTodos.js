import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])
    
    const [searchValue, setSerachValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(
        todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const filterTodos = todos.filter(todo =>
        todo.text.toLocaleLowerCase().includes
            (searchValue.toLocaleLowerCase()))

    const addtodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        })
        saveTodos(newTodos);
    };

    const completeTodo = (text, completed) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = !completed
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }
    
    return (
            {
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSerachValue,
            completeTodo,
            filterTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addtodo
            }
    );
}


export { useTodos }