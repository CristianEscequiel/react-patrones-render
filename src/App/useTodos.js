import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItems: sincronizeTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])
    
    console.log(todos)

    const [searchValue, setSerachValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(
        todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = []

    if(!searchValue.length >= 1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo=> {
            const todoText = todo.text.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText);
        })
    }


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

    const states = {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        openModal,
    }

    const stateUpdaters = {
        completeTodo,
        setSerachValue,
        deleteTodo,
        setOpenModal,
        addtodo,
        sincronizeTodos
    }
    
    return { states , stateUpdaters};
}


export { useTodos }